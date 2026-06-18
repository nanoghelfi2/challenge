import toast from 'react-hot-toast';

export const notify = {
    success: (msg, options) => toast.success(msg, options),
    error: (msg, options) => toast.error(msg, options),
    info: (msg, options) => toast(msg, options),
    warning: (msg, options) =>
        toast(msg, {
            icon: '⚠️',
            ...options,
        }),
};
