(()=>{"use strict";(async function(){try{const t=await fetch("https://api.github.com/users/github");return await t.json()}catch(t){throw new Error("Failed to get user data")}})().then((t=>(t=>{const{name:a,company:n}=t;console.log(`${a} from ${n}`)})({name:t.name,company:t.location})))})();