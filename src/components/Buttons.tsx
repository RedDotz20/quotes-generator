import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

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

	const handleRandomId = () =>
		setRandomId(Math.floor(Math.random() * quotesArray.length));

	return (
		<button
			className="inline-block px-6 py-2 border-2 border-white text-white font-semibold text-xs leading-tight uppercase rounded hover:bg-black/[.75] focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full tracking-widest"
			onClick={() => handleRandomId()}
			disabled={isFetching ? true : false}
		>
			Generate New Random Quote
		</button>
	);
}
