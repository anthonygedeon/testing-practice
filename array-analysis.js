const analyze = data => {
    return { 
        average() {
            const sum = data.reduce((prev, cum) => {
                return prev + cum;
            }, 0);

            return sum / data.length
        },
        max: Math.max(...data),
        min: Math.min(...data),
        length: data.length
    } 
}

module.exports = analyze;