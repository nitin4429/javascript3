function calculateRemainingDays(eventDate){
    const currentDate= new Date();
    const eventDateTime=new Date(eventDate);
    const timeDiff= eventDateTime  - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining;
}
const eventDate = '2023-09-31'
console.log(calculateRemainingDays(eventDate));