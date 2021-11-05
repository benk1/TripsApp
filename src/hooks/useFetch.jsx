import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsPending(true);

			try {
				const { data } = await axios.get(url);
			
				setIsPending(false);
				setData(data);
				setError(null);
			} catch (ex) {
				setIsPending(false);
				setError('Could Not Fetch Data');
				console.log(ex.message);
			}
		};
		fetchData();
	}, [url]);
	return { data: data, isPending, error };
};
