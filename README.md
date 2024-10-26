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
      <Link href="/?showModal=modal1"> Modal1</Link>
      <Link href="/?showModal=modal2" className="underline">
        Modal2
      </Link>
      <Dialog modalType="modal1">
        <div className="w-96 bg-red-50 h-10">Modal1</div>
        <button onClick={onCloseModal}>Close</button>
      </Dialog>
      <Dialog modalType="modal2">
        <div className="w-full bg-red-50 h-10">Modal2</div>
      </Dialog>
    </div>
  );
}
```
