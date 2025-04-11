
//Vi kan hente via ID, men Mark synes vi skal anvende slug. Det er også noget der ligger i vores data i konsollen. En slug er enn version af titlen, der er lettere at læse og forstå. Det ændrer URL'en til noget mere læsbart. Det er den vej vi skal gå, siger Mark. 
//Der skal oprettes en ny JS fil til opskriftsiden. 
// Vi skal anvende queryparameters til at hente data fra URL'en. (ParamsString) Det kan puttes ind i URLsearchParams. Det er en særlig type objekt, der gør det muligt at arbejde med URL-forespørgselsparametre. Så kann vi efterfølgende hapse parametrene ud af URL'en og fortælle hvad vi vil have. Man kann bare google "wordpress get post by slug" og så får man måske develporsiden og gode svar. Mann skal huske at søge efter rest api og slug, og så vises mange parametre. Vi skal lave en funktion hvis opgave det er, at hente noget via slug. Se herunder.

const token = await getToken();

const paramSting = window.location.search;
const searchParams = new URLSearchParams(paramSting);



const currentRecipe = await getRecipeBySlug(token, slug);

//herefter skal den renderes og vises på skærmen.

renderRecipe(currentRecipe);