import Button from "@mui/material/Button";
import Loading from "./Loading";
import { useQuery } from "react-query";

interface randomIdInterface {
	setRandomId: React.Dispatch<React.SetStateAction<number>>;
}

interface Quote {
	text: string;
	author: string | null;
}

export default function QueryBtn({ setRandomId }: randomIdInterface) {
	const { data, isFetching } = useQuery(["quotes"]);
	const quotesArray: typeof data[] = data as Quote[];

	return (
		<button
			onClick={() =>
				setRandomId(Math.floor(Math.random() * quotesArray.length))
			}
			disabled={isFetching ? true : false}
			className="inline-block px-6 py-2 border-2 border-white text-white font-semibold text-xs leading-tight uppercase rounded hover:bg-black/[.75] focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full tracking-widest"
		>
			Generate New Random Quote
		</button>
	);
}
