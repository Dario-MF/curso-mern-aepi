import React, { useEffect, useState } from 'react';

const Scroll = () => {
    const [scroll, setScroll] = useState(window.scrollY);


    useEffect(()=> {
        const onScroll = ()=> {
            console.log('event scroll')
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', onScroll);
        return function removeEvent() {
             window.removeEventListener('scroll', onScroll)
        }
    })
   
    return (
        <div>
            <h1>Scroll</h1>
            <hr/>
            <p>Scroll: {scroll}</p>
            <hr/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a tempore perspiciatis aspernatur voluptatibus officiis nihil quos magni neque voluptate quo laudantium quasi alias, enim, tempora culpa reprehenderit hic. Tempore.</p>
        </div>
    );
};

export default Scroll;
