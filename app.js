const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "If you want to shine like the sun, first burn like the sun. - A.P.J. Abdul Kalam",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas Edison",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas Edison",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The best revenge is massive success. - Frank Sinatra",
    "If you want to shine like the sun, first burn like the sun. - A.P.J. Abdul Kalam",
    "The best revenge is massive success. - Frank Sinatra",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost"
  ];

const quoteText = document.getElementById('quote-text');
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', generateRandomQuote);

function generateRandomQuote(){
    const randIndex = Math.floor(Math.random()*quotes.length)
    quoteText.textContent=quotes[randIndex]
}
  