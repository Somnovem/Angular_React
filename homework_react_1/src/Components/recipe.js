export default function Recipe() {
    return (
        <div className='container d-flex flex-column wrapper'>
            <div className='container row'>
                <div className='col-4'>
                    <h2>Pasta Carbonara</h2>
                    <hr/>
                    <h4>Prep time: <b>10 mins</b></h4>
                    <h4>Cook time: <b>20 mins</b></h4>
                    <h4>Servings: <b>4 to 6 servings</b></h4>
                    <br/>
                    <h3>Ingredients</h3>
                    <ul style={{fontSize:'1.1rem'}}>
                        <li>1 tablespoon extra virgin olive oil or unsalted butter</li>
                        <li>1/2 pound pancetta or thick cut bacon, diced</li>
                        <li>1 to 2 garlic cloves, minced, about 1 teaspoon (optional)</li>
                        <li>3 to 4 whole eggs</li>
                        <li>1 cup grated Parmesan or pecorino cheese</li>
                        <li>1 pound spaghetti (or bucatini or fettuccine)</li>
                        <li>Kosher salt and freshly ground black pepper to taste</li>
                    </ul>
                </div>
                <div className='col-8 d-flex justify-content-center align-content-center'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oLD4mqom95_9RdcrtZjaGQHaE7%26pid%3DApi&f=1&ipt=3b3e71c22c1aebf0e7b3dfc2780fa95e885377e112dc07ef9504326d809936f6&ipo=images"
                         alt="finished dish" style={{borderRadius:'15px',margin:'10px'}}/>
                </div>
            </div>
            <div className='container'>
                <h2>Method</h2>
                <ol>
                    <li>
                        <h4>Heat the pasta water: </h4>
                        <p>Put a large pot of salted water on to boil (1 tablespoon salt for every 2 quarts of water.)</p>
                    </li>
                    <li>
                        <h4>Sauté the pancetta or bacon and garlic:</h4>
                        <p>
                            While the water is coming to a boil, heat the olive oil or butter in a large sauté pan over medium heat. Add the bacon or pancetta and cook slowly until crispy.

                            Add the garlic (if using) and cook another minute, then turn off the heat and put the pancetta and garlic into a large bowl.
                        </p>
                    </li>
                    <li>
                        <h4>Beat the eggs and half of the cheese:</h4>
                        <p>In a small bowl, beat the eggs and mix in about half of the cheese.</p>
                    </li>
                    <li>
                        <h4>Cook the pasta:</h4>
                        <p>Once the water has reached a rolling boil, add the dry pasta, and cook, uncovered, at a rolling boil.</p>
                    </li>
                    <li>
                        <h4>Toss the pasta with pancetta or bacon:</h4>
                        <p>When the pasta is al dente (still a little firm, not mushy), use tongs to move it to the bowl with the bacon and garlic. Let it be dripping wet. Reserve some of the pasta water.

                            Move the pasta from the pot to the bowl quickly, as you want the pasta to be hot. It's the heat of the pasta that will heat the eggs sufficiently to create a creamy sauce.

                            Toss everything to combine, allowing the pasta to cool just enough so that it doesn't make the eggs curdle when you mix them in. (That's the tricky part.)</p>
                    </li>
                    <li>
                        <h4>Add the beaten egg mixture:</h4>
                        <p>Add the beaten eggs with cheese and toss quickly to combine once more. Add salt to taste. Add some pasta water back to the pasta to keep it from drying out.</p>
                    </li>
                    <li>
                        <h4>Serve</h4>
                        <p>Serve at once with the rest of the parmesan and freshly ground black pepper. If you want, sprinkle with a little fresh chopped parsley.</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}