"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { db } from "@/lib/firebaseStore";
import {
  doc,
  setDoc,
  query,
  collection,
  where,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export default function SuccessPage() {
  const [docID, setDocID] = useState<null | string>(null);
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    const fetcher = async () => {
      const q =await query(
          collection(db, "users"),
          where("email", "==", session?.user?.email)
      );
      const querySnapshot = await getDocs(q);
      setDocID(querySnapshot.docs[0].id);
    };
    fetcher();
  }, [session]);

  const URL = sessionId ? `/api/stripe/sessions/${sessionId}` : null;
  const { data: checkoutSession, error } = useSWR(URL, fetcher);

  if (error) return <div>failed to load the session</div>;

  if (checkoutSession) {
    const docId =
        checkoutSession.customer_details?.name +
        checkoutSession.customer_details?.email;

    docID && updateDoc(doc(db, "users", docID!.toString()), {
      paymentId: checkoutSession.payment_intent.id,
    });

    setDoc(doc(db, "payments", docId), checkoutSession);

    return (
        <div className="flex flex-col items-center justify-center h-screen px-4">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 max-w-md w-full shadow-2xl backdrop-blur-sm text-center">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-zinc-100 mb-2">
              Payment Successful!
            </h1>
            <p className="text-zinc-400 mb-6">
              Your payment of {checkoutSession.payment_intent.amount_received / 100} has been processed successfully.
            </p>
            <div className="text-left bg-zinc-950/50 p-4 rounded-lg border border-zinc-800/80 space-y-2 text-sm text-zinc-300 mb-6">
              <p><strong className="text-zinc-400">Payment ID:</strong> {checkoutSession.payment_intent.id}</p>
              <p><strong className="text-zinc-400">Customer Name:</strong> {checkoutSession.customer_details?.name}</p>
              <p><strong className="text-zinc-400">Customer Email:</strong> {checkoutSession.customer_details?.email}</p>
            </div>
            <a href="/" className="inline-block w-full py-2.5 px-4 bg-[#00b0f0] hover:bg-[#009ad4] text-white font-medium rounded-lg transition-colors">
              Go to Home
            </a>
          </div>
        </div>
    );
  } else {
    return (
        <div className="flex flex-col justify-center h-screen items-center space-x-4">
          <Skeleton className="h-4 w-[300px]" />
          <div className="space-y-2 mt-8">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
    );
  }
}