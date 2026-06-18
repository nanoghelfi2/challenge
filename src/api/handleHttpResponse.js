const buildFallbackError = (response) => ({
    success: false,
    message: `HTTP ${response.status}`,
    error: response.statusText || 'Request failed',
});

export const handleHttpResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    let responseData = null;

    if (contentType?.includes('application/json')) {
        responseData = await response.json();
    }

    if (!response.ok) {
        return buildFallbackError(response);
    }

    return {
        success: true,
        data: responseData,
    };
};
