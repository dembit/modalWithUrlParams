Example to reuse this component: 
```jsx
'use client';
import Link from "next/link";
import Dialog from "./components/Dialog";
import { useModalHandler } from "./components";

export default function Home() {

  const { onCloseModal } = useModalHandler();

  return (
    <div className="bg-red-50  border-current text-blue w-[400px] aspect-[16/3] relative">
      <Link href="/?showModal=y"> Go With Modal</Link>
      <Link href="/?showModal=dialog" className="underline">
        Go to Without Modal
      </Link>
      <Dialog modalType="dialog">
        <div className="w-96 bg-red-50 h-10">Dialog base</div>
        <button onClick={onCloseModal}>Close</button>
      </Dialog>
      <Dialog modalType="y">
        <div className="w-full bg-red-50 h-10">Dialog Y</div>
      </Dialog>
    </div>
  );
}
</pre>
