const parseChartDate = (req) => {
    let { beginDate, endDate } = req.query;

    // If no date range, just return today
    if(!beginDate) beginDate = new Date().toLocaleDateString();
    if(!endDate) endDate = new Date().toLocaleDateString();

    return {
        beginDate,
        endDate
    };
}


module.exports = {
    parseChartDate
}
