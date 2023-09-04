import { useQuery } from '@tanstack/react-query';

type randomIdInterface = {
	setRandomId: React.Dispatch<React.SetStateAction<number>>;
};

interface Quote {
	text: string;
	author: string | null;
}

export default function QueryBtn({ setRandomId }: randomIdInterface) {
	const { data, isFetching } = useQuery(['quotes']);
	const quotesArray: (typeof data)[] = data as Quote[];

	const handleRandomId = () =>
		setRandomId(Math.floor(Math.random() * quotesArray.length));

	return (
		<button
			className="inline-block px-6 py-4 bg-white font-black text-sm leading-tight uppercase rounded hover:bg-[#C0C0C0] focus:outline-none focus:ring-0 transition duration-150 ease-in-out tracking-widest"
			onClick={() => handleRandomId()}
			disabled={isFetching ? true : false}
		>
			Generate New Random Quote
		</button>
	);
}
