import { useEffect, useState } from 'react';

export const useAsync = (fn, { autoExecute, deps = [], props = [] } = {}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const execute = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fn(...args);
            setData(result);
            return result;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (autoExecute) {
            execute(...props);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps, autoExecute]);

    const updateData = (updater) => {
        setData((prev) => updater(prev));
    };

    return { execute, loading, error, data, updateData };
};
