import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from './Loading';

function Quotes({ randomId }: { randomId: number }) {
	const quotesQuery = useQuery({
		queryKey: ['quotes'],
		queryFn: async () => {
			return await axios
				.get('https://type.fit/api/quotes')
				.then((res) => res.data);
		},
		staleTime: Infinity,
	});

	const { data, isFetching, isLoading, isError, error } = quotesQuery;

	if (isLoading || isFetching) return <Loading />;
	if (isError && error !== null && error instanceof Error && error.message) {
		return <h1>An error has occurred: {error.message}</h1>;
	}

	return (
		<>
			<h2 className="font-semibold max-w-[600px] break-words">
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

export default Quotes;
