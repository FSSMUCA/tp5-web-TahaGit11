// EXERCICE 1
{
    let x = "150";
    let y = 150;
    let z = true;

    console.log("Type de x :", typeof x);
    console.log("Type de y :", typeof y);
    console.log("Type de z :", typeof z);

    x = Number(x);
    console.log("Nouveau type de x :", typeof x);
}

// EXERCICE 2
{
    let prenom = "Sara";
    let age = 22;

    let phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans";
    console.log(phrase);

    age = 23;
    let nouvellePhrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans";
    console.log(nouvellePhrase);
}

// EXERCICE 3
{
    let n = Number(prompt("Entrez un nombre : "));

    if (n < 0) {
        console.log("Nombre négatif");
    } else {
        if (n <= 10) console.log("Petit");
        else if (n <= 50) console.log("Moyen");
        else if (n > 100) console.log("Très grand");
        else console.log("Grand");
    }
}

// EXERCICE 4
{
    let min = Number(prompt("Entrez le nombre minimal : "));
    let max = Number(prompt("Entrez le nombre maximal : "));

    for (let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(i + " : Five&Three");
        else if (i % 3 === 0) console.log(i + " : Three");
        else if (i % 5 === 0) console.log(i + " : Five");
        else console.log(i);
    }
}

// EXERCICE 5
{
    let n = Number(prompt("Entrez un nombre pour la table de multiplication :"));

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// EXERCICE 6
{
    let sommePairs = 0;
    let sommeImpairs = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) sommePairs += i;
        else sommeImpairs += i;
    }

    console.log("Somme des nombres pairs entre 1 et 50 :", sommePairs);
    console.log("Somme des nombres impairs entre 1 et 50 :", sommeImpairs);
}

// EXERCICE 7
{
    function verifierMotDePasse(mdp) {
    if (mdp && mdp.length >= 8 && mdp.includes("@")) {
        return true;
    } else 
        return false;
    }

}

// EXERCICE 8
{
    function totalAvecRemise(total, remise) {
        return total - (total * remise / 100);
    }

    let totalHT = Number(prompt("Entrez le total HT :"));
    let remise = Number(prompt("Entrez la remise (%) :"));

    let totalFinal = totalAvecRemise(totalHT, remise);
    console.log(`Total après remise : ${totalFinal}`);
}

// EXERCICE 9
{
    function factorielle(n) {
        if (n === 0) return 1;
        return n * factorielle(n - 1);
    }

    let nombre = Number(prompt("Entrez un nombre pour calculer sa factorielle :"));
    console.log(`Factorielle de ${nombre} = ${factorielle(nombre)}`);
}

// EXERCICE 10
{
    function sommeIterative(n) {
        let somme = 0;
        for (let i = 1; i <= n; i++) somme += i;
        return somme;
    }

    function sommeRecursive(n) {
        if (n === 0) return 0;
        return n + sommeRecursive(n - 1);
    }

    let n = Number(prompt("Entrez un nombre pour calculer la somme :"));
    console.log(`Somme itérative de 1 à ${n} = ${sommeIterative(n)}`);
    console.log(`Somme récursive de 1 à ${n} = ${sommeRecursive(n)}`);
}

