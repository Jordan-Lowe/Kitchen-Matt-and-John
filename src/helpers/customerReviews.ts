export interface ReviewType {
  name: string
  review: string
}

const custReviews: ReviewType[] = [
  {
    name: 'Ian Gibson ',
    review: `John is a Master Craftsman and has been installing cabinetry projects of all sizes and complexities for many years. His expertise, specialised knowledge and project management skills are reflected in the high quality of each finished installation.
  We have worked with John and his team on two house renovation and have enjoyed the projects they delivered. No problem was too big to resolve and he has a keen eye-for-detail. At all times John kept us well informed along our renovation journey. His team worked closely with us to ensure every detail was perfect and always cleaned-up at the end of the day.
   We learnt quickly to trust them and they delivered the value and quality we required. I Iain Gibson highly recommend there service`,
  },
  {
    name: 'Matthew Harrison ',
    review: `John and his team brought our kitchen and home renovations to life. Throughout the entire process, John's professionalism and transparency stood out. He not only accommodated our specific requests but also offered valuable suggestions to optimize our spaces for maximum efficiency and usability. Most importantly, John completed the project within our budget, making our renovation dreams a reality. We recommend John and his crew for future kitchen and home renovations.`,
  },
  { name: 'Peter', review: 'I love this product, it really changed my life!' },
  { name: 'Richard', review: 'Great' },
]

export default custReviews
