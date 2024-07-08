export const fetchData = async () => {
    const response = await fetch('http://localhost:5000/api');
    const data = await response.json();
    return data
};

export const postData = async (data) => {
    const response = await fetch('http://localhost:5000/api/data',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    const result = await response.json();
    return result; 
}