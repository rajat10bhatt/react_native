const slides = [
    {
        title: 'React',
    bullets: [
        'Imperative vs Declarative',
        "The browser APIs aren't fun to work with",
        'React allows us to write what we want, and library will take care of the DOM manipulation'
    ]
    },
    {
        title: 'React is declarative',
    bullets: [
        'Imperative vs Declarative',
        "The browser APIs aren't fun to work with",
        'React allows us to write what we want, and library will take care of the DOM manipulation'
    ]
    },
    {
        title: 'React is easily componentized',
    bullets: [
        'Imperative vs Declarative',
        "The browser APIs aren't fun to work with",
        'React allows us to write what we want, and library will take care of the DOM manipulation'
    ]
    }
]

// Implement slideshow
// <Slide /> in div is written and initialized as capital as words with capital are considered functions 
// so here the html property is taken as parameter for the component(Slide)
const slideShow = (
    <div>
        {slides.map(slide => <Slide slide = {slide} />)}
    </div>
)
const Slide = slide => (
    <div>
        <h1>{slide.title}</h1>
        <ul>
            {slide.bullets.map(bullet => <li>{bullet}</li>)}
        </ul>
    </div>
)