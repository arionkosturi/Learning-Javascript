// Funksionet Shigjete
// Kur funksioni eshte vetem nje rresht
// nuk ka nevoje per {} dhe as per return
// (params) => { code }

const mbledhje = (x,y) => x+y;
mbledhje(10,12);


function pjesto(a,b) { return  a/b }
pjesto(4,2);
// tek funksioni pjesto fusim si parameter
// funksionin mbledhje. 22/2=11
pjesto(mbledhje(10,12),2);