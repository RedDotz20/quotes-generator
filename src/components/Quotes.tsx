import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { CircularProgress } from '@mui/material';

const fetchQuotes = async () => {
	const response = await axios.get('https://type.fit/api/quotes');
	return response.data;
};

type QuotesProps = { randomId: number };

export default function Quotes({ randomId }: QuotesProps) {
	const quotesQuery = useQuery(['quotes'], fetchQuotes, {
		staleTime: Infinity,
	});

	const { data, isFetching, isLoading, isError, error } = quotesQuery;

	if (isLoading || isFetching) return <CircularProgress />;

	if (isError && error instanceof Error && error.message) {
		return <h1>An error has occurred: {error.message}</h1>;
	}

	return (
		<>
			<h2 className="font-semibold w-full break-words mx-full">
				"{data[randomId].text}"
			</h2>
			<h3 className="w-full italic">
				{data[randomId].author !== null
					? `- ${data[randomId].author}`
					: '- Unknown'}
			</h3>
		</>
	);
}
