// ///////////////
//PROJECT UPDATE FOR US TOMORROW: 
// we created a findbyCategory function that is working and ready 
// created elements in the DOM to append to our html elements 
// currently working on renderCompany Block function, we need to append from text div down 
// we also pulled both our local storages to be utilized in this file


// import other files 

import orgsData from '../data/orgs-data-list.js';
import findByCategory from './find-by-category.js';

const parsedPreferences = JSON.parse(localStorage.getItem('preferences')); 

findByCategory(parsedPreferences, orgsData); 

const parsedOptions = JSON.parse(localStorage.getItem('options')); 


// for each company that comes through options array, we're filling out our template and creating the block
 
//render a company block function
export function renderCompanyBlock() { 

    for (let i = 0; i < parsedOptions.length; i++){
        const company = parsedOptions[i]; 

        // parent company block
        const companyBlock = document.createElement('section');
        companyBlock.classList.add('company');
    
        // logo div 
        const logoDiv = document.createElement('div'); 
        logoDiv.class = 'logo';
        const companyImage = document.createElement('img');
        companyImage.src = `../assets/companies/${company.image}`;
        //append to the logo div
        logoDiv.appendChild(companyImage);
        companyBlock.appendChild(logoDiv);


        // text div 
        const textDiv = document.createElement('div'); 
        textDiv.class = 'company-id';
        const pName = document.createElement('p'); 
        pName.textContent = company.name;
        const pDescription = document.createElement('p');
        pDescription.textContent = company.description; 
        //append to the text div 
        textDiv.appendChild(pName);
        textDiv.appendChild(pDescription);
        companyBlock.appendChild(textDiv);

        // category div
        const categoryDiv = document.createElement('div'); 
        categoryDiv.class = 'category';
        const pCategory = document.createElement('p');
        pCategory.textContent = company.category; 
        //append
        categoryDiv.appendChild(pCategory); 
        companyBlock.appendChild(categoryDiv); 

    
        // save div
        const saveDiv = document.createElement('div'); 
        saveDiv.class = 'fav-button';
        const favButton = document.createElement('button');
        favButton.textContent = 'Favorite'; 
        //append
        saveDiv.appendChild(favButton);
        companyBlock.appendChild(saveDiv);

        const optionsList = document.getElementById('options-list');
        
        optionsList.appendChild(companyBlock);
    }

}

renderCompanyBlock();


//pull down localStorage named 'options' to get acess to 'optionsArray'
    //go through 'optionsArray'(a for loop or a forEach)
    // create blocks for each company of code to be childAppended to a parent node called the "company section". 


/*
<section class='company'>
            <div id=logo>
                <image>
            </div>
            <div id=text>
                <p>name<p/>
                <p>description</p>
            </div>
            <div id='cat'>
                <p>category(s)</p>
             </div>
            <div id='save'>
                <button>Favorite</button>
            </div>
        </section>
*/

//Event listeners for save buttons 
    // upon clicking take in info about user's choice
    // pushed into a new array that will become it's own local storage named "favorites"