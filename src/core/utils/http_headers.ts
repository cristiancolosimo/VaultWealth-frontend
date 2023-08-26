export function generateHeaders(){
    const headers :any= {
        'Content-Type': 'application/json'
    };
    const token = localStorage.getItem('token');
    if(token){
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}
