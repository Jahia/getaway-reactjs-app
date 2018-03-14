import React, {Component} from 'react'

class DestinationOutline extends Component {

    render() {
        return (

            <section className="outlineMain">
                {/*<div class="outline-info">
                By <b>the GetAway team</b><span></span><time datetime="2017-12-08">Travel date <b>8 December 2017</b></time>

            </div>*/}
                <section className="outline-container wrap">
                    <div className="read-more" onclick="this.classList.add('expanded')">
                        <article className="outline-text">
                            <p>Paris has a timeless familiarity for first-time and frequent visitors, with instantly recognisable architectural icons, along with exquisite cuisine, chic boutiques and priceless artistic treasures. You can check below all the details of our trip!</p>
                            <b>Iconic Architecture</b>
                            <p>The wrought-iron spire of the Eiffel Tower piercing the clouds, the broad Arc de Triomphe guarding Paris’ most glamorous avenue, the Champs-Élysées, the gargoyled Notre Dame cathedral, lamplit bridges spanning the Seine and art nouveau cafes spilling on to wicker-chair-lined terraces are indelibly etched in the minds of anyone who’s visited the city – and the imaginations of anyone who hasn’t (yet). But despite initial appearances, Paris’ cityscape isn’t static: there are some stunning modern and contemporary icons too, from the inside-out, industrial-style Centre Pompidou to the mur végétal (vertical garden) gracing the striking Musée du Quai Branly.</p>
                            <b>Glorious Food</b>
                            <p>Paris’ dining is iconic: France’s reputation for its cuisine (the French word for ‘kitchen’) precedes it, and whether you seek a cosy neighbourhood bistro or a triple-Michelin-starred temple to gastronomy, you'll find every establishment prides itself on exquisite preparation and presentation of quality produce, invariably served with wine. Enticing patisseries, boulangeries (bakeries), fromageries (cheese shops) and crowded, colourful street markets are perfect for packing a picnic to take to the city’s parks and gardens. A host of culinary courses – from home kitchens through to the world’s most prestigious cookery schools – offers instruction for all schedules, abilities and budgets.</p>
                            <b>Artistic Treasures</b>
                            <p>With an illustrious artistic pedigree – Renoir, Rodin, Picasso, Monet, Manet, Dalí and Van Gogh are but a few of the masters who lived and worked here over the years – Paris is one of the great art repositories of the world, harbouring treasures from antiquity onward. In addition to big hitters like the incomparable Louvre, the Musée d’Orsay’s exceptional impressionist collection, and the Centre Pompidou’s cache of modern and contemporary art, there are scores of smaller museums housing collections in every imaginable genre, and a diverse range of venues mounting major exhibitions through to off-beat installations.</p>
                        </article>
                        <span className="trigger">Read more</span>
                    </div>
                </section>
            </section>
        )
    }
}

export default DestinationOutline