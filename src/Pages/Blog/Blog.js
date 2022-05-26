import React from 'react'

const Blog = () => {
    return (
        <div className='px-1 md:px-2 lg:px-4 my-8'>

            <div className="card my-4 min-h-fit bg-base-100 shadow-xl shadow-green-500/50">
                <div className="text-center">
                    <div className="w-full card-body">
                        <h1 className="text-xl lg:text-3xl font-bold">1. What are the different ways to manage a state in a React application?</h1>
                        <p className="py-6">Four Kinds of React State to Manage. <br />
                            1. Local state <br />
                            2. Global state <br />
                            3. Server state <br />
                            4. URL state <br />
                            Local state is to manage data locally in one or another component. useState hook is a local react state management system.
                            <br />
                            Global state is data we manage across multiple components. Like, Global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                            <br />
                            Data that comes from an external server that must be integrated with our UI state.
                            <br />
                            URL state is often missing as a category of state, but it is an important one. Data that exists on our URLs, including the pathname and query parameters.</p>
                    </div>
                </div>
            </div>

            <div className="card my-4 min-h-fit bg-base-100 shadow-xl shadow-green-500/50">
                <div className="text-center">
                    <div className="w-full card-body">
                        <h1 className="text-xl lg:text-3xl font-bold">2. How does prototypical inheritance work?</h1>
                        <p className="py-6">
                            The Prototypal Inheritance is a feature in javascript. Whenever you create anything in Javascript even a variable, they get access to some of the hidden properties and methods. So these come what are prototype. Whenever you create any object, JavaScript engine automatically puts this hidden property in an object and attached to your object and that is how you can access this properties and methods.It is a method by which an object can inherit the properties and methods of another object.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card my-4 min-h-fit bg-base-100 shadow-xl shadow-green-500/50">
                <div className="text-center">
                    <div className="w-full card-body">
                        <h1 className="text-xl lg:text-3xl font-bold">3. What is a unit test? Why should write unit tests?</h1>
                        <p className="py-6">
                            Unit testing is a software development process in which the smallest  parts of an application, like components called units, are individually and independently look over for proper operation. The fact of unit testing is to point out the program to test and work out if it works as intended. Unit testing is an important step in the development process. It can help developer to detect early flaws in code which may be more difficult to find in later testing stages. A unit test typically have three stages. 1. Plan, 2.Cases, & 3. Scripting. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card my-4 min-h-fit bg-base-100 shadow-xl shadow-green-500/50">
                <div className="text-center">
                    <div className="w-full card-body">
                        <h1 className="text-xl lg:text-3xl font-bold">4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        <p className="py-6">

                            <>
                                const products = [ <br />
                                {`{ name: 'iphone 13 pro max', price: 10, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'iphone x', price: 15, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'Redmi Phone', price: 20, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'Realme phon', price: 25, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'Oppo Laptop', price: 30, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'xyz tv', price: 30, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'Sumsang Tab', price: 35, description: 'Lorem ipsum dolor sit amet' },`} <br />
                                {`{ name: 'imac', price: 40, description: 'Lorem ipsum dolor sit amet' },`} <br />] <br /> <br />

                                const search = 'phone' <br />
                                const result = [];<br />
                                function myFunc(products) {`{`} < br />
                                {` for (const product of products) { `} <br />
                                {` if (product.name.toLowerCase().`}<br />{`includes(search.toLowerCase())) { `}<br />
                                {` // console.log(product)`}<br />
                                {`   result.push(product)`}<br />
                                {` }`}<br />
                                {` }`}<br />
                                {` }`}<br />
                                myFunc(products); <br />
                                console.log(result);
                            </>

                            <p></p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="card my-4 min-h-fit bg-base-100 shadow-xl shadow-green-500/50">
                <div className="text-center">
                    <div className="w-full card-body">
                        <h1 className="text-xl lg:text-3xl font-bold">5. Why you do not set the state directly in React ?</h1>
                        <p className="py-6">
                            when we update the state of a component all it's children are going to be rendered or our entire component tree rendered. But that doesn’t mean the entire DOM is updated. When a component is rendered the application basically get a react element, so that is updating on our virtual dom. React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn’t update the state directly. <br />
                            React will figure out what is changed based on that it will update the real DOM accordingly.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog