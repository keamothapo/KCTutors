import React, {useEffect, useState} from 'react';

function Task()
{
    useEffect( () => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    
    const fetchItems = async () => {
        const data = await fetch('home/');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                
                <div class="container-fluid p-3 w-50">
                    <div class="card-deck">
                        <div class="card">
                            <div class="card-body p-1">
                                <h6 class="card-title">{item.tittle}</h6>
                                <p class="card-text">{item.details}</p>
                                <p class="card-text"><i>by {item.status}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    );
}

export default Task;
