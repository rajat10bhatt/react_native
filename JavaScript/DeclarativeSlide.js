const SLIDE = {
    title: 'React is declarative',
    bullets: [
        'Imperative vs Declarative',
        "The browser APIs aren't fun to work with",
        'React allows us to write what we want, and library will take care of the DOM manipulation'
    ]
}

function createSlide() {
    return (
        <div>
            <h1>{SLIDE.title}</h1>
            <ul>
                {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}