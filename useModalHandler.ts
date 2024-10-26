import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { urlModalParameter } from "./constant";


export default function useModalHandler() {
  const searchParams = useSearchParams();
  const modalParameter = searchParams.get(urlModalParameter);
  const pathname = usePathname();
  const { replace } = useRouter();

  const onCloseModal = () => {
    if (modalParameter) {
      const params = new URLSearchParams(searchParams);
      params.delete(urlModalParameter);
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return { onCloseModal, modalParameter };
}
