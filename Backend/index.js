import express from 'express';

const app = express();


app.get('/api/testcases', (req, res)=>{
    const testcases = [
        {
            Primes: [55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765],
        },
        {
            Fibonacci: [8,10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56 ],
        }
    ]

    if(req.query.search){
        const filterTestCases = testcases.filter(testcases => 
            testcases.name.includes(req.query.search))
            res.send(filterTestcases);
            return;
    }

    setTimeout(()=>{
        res.send(testcases);
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('Server running on port ${port}');
});