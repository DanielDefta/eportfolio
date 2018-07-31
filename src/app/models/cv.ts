export class CV {

    _cv: Map<string, Map<string, Map<string, Array<string>>>> = new Map<string, Map<string, Map<string, Array<string>>>>();

    constructor() {
        this._cv.set("NL", new Map<string, Map<string, Array<string>>>());

        this._cv.get("NL").set("Persoonlijke gegevens", new Map<string, Array<string>>());

        this._cv.get("NL").get("Persoonlijke gegevens").set("Naam", ["Defta"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("Voornaam", ["Daniel"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("Geboortedatum", ["12/12/1996"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("Geboorteplaats", ["Rimnicu Vilcea​"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("Nationaliteit", ["Roemeens"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("Adres", ["Albrecht Rodenbachstraat 42/0006​"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("Woonplaats", ["Denderleeuw"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("E-mail", ["danieldefta@yahoo.com​"]);
        this._cv.get("NL").get("Persoonlijke gegevens").set("GSM", ["0499929737"]);

        this._cv.get("NL").set("Opleiding", new Map<string, Array<string>>());

        this._cv.get("NL").get("Opleiding").set("2015-heden", ["Bachelor Toegepaste Informatica", "Hogeschool Gent"]);
        this._cv.get("NL").get("Opleiding").set("2013-2015", ["Industriële ICT", "Sint-Jozef Instituut - Geraardsbergen"]);
        this._cv.get("NL").get("Opleiding").set("2012-2013", ["​OKAN (Onthaalklas voor anderstalige nieuwkomers)", "Sint-Jozef Instituut - Geraardsbergen"]);
        this._cv.get("NL").get("Opleiding").set("2011-1012", ["Wiskunde-Informatica", "CNI Matei Basarab - Rm. Vilcea"]);

        this._cv.get("NL").set("Taalvaardigheden", new Map<string, Array<string>>());

        this._cv.get("NL").get("Taalvaardigheden").set("Roemeens", ["Moedertaal"]);
        this._cv.get("NL").get("Taalvaardigheden").set("Nederlands", ["Goeiekennis"]);
        this._cv.get("NL").get("Taalvaardigheden").set("Engels", ["Goeie kennis"]);
        this._cv.get("NL").get("Taalvaardigheden").set("Frans", ["Basis kennis"]);

        this._cv.get("NL").set("Computervaardigheden", new Map<string, Array<string>>());

        this._cv.get("NL").get("Computervaardigheden").set("JAVA", ["Zeer goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set(".NET", ["Zeer goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set("HTML", ["Goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set("CSS", ["Goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set("SQL", ["Zeer goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set("Angular.js & Node.js", ["Zeer goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set("Android & iOS (Swift)", ["Goeie kennis"]);
        this._cv.get("NL").get("Computervaardigheden").set("Microsoft Office", ["Zeer goeie kennis"]);

        this._cv.get("NL").set("Interesses", new Map<string,Array<string>>());
        this._cv.get("NL").get("Interesses").set("Sporten", ["Ik speel voetbal het meest maar ik doe alle sporten graag!"]);
        this._cv.get("NL").get("Interesses").set("Programmeren", []);

        this._cv.set("EN", new Map<string, Map<string, Array<string>>>());

        this._cv.get("EN").set("Personal information", new Map<string, Array<string>>());

        this._cv.get("EN").get("Personal information").set("First name", ["Defta"]);
        this._cv.get("EN").get("Personal information").set("Last name", ["Daniel"]);
        this._cv.get("EN").get("Personal information").set("Date of birth", ["12/12/1996"]);
        this._cv.get("EN").get("Personal information").set("Place of birth", ["Rimnicu Vilcea​"]);
        this._cv.get("EN").get("Personal information").set("Nationality", ["Romanina"]);
        this._cv.get("EN").get("Personal information").set("Adress", ["Albrecht Rodenbachstraat 42/0006​"]);
        this._cv.get("EN").get("Personal information").set("Place", ["Denderleeuw"]);
        this._cv.get("EN").get("Personal information").set("E-mail", ["danieldefta@yahoo.com​"]);
        this._cv.get("EN").get("Personal information").set("Phone number", ["0499929737"]);

        this._cv.get("EN").set("Education", new Map<string, Array<string>>());

        this._cv.get("EN").get("Education").set("2015-now", ["Bachelor Toegepaste Informatica", "Hogeschool Gent"]);
        this._cv.get("EN").get("Education").set("2013-2015", ["Industriële ICT", "Sint-Jozef Instituut - Geraardsbergen"]);
        this._cv.get("EN").get("Education").set("2012-2013", ["​OKAN (Onthaalklas voor anderstalige nieuwkomers)", "Sint-Jozef Instituut - Geraardsbergen"]);
        this._cv.get("EN").get("Education").set("2011-1012", ["Mathematics-Informatics", "CNI Matei Basarab - Rm. Vilcea"]);

        this._cv.get("EN").set("Languages", new Map<string, Array<string>>());

        this._cv.get("EN").get("Languages").set("Romanian", ["Native language"]);
        this._cv.get("EN").get("Languages").set("Dutch", ["Good knowledge"]);
        this._cv.get("EN").get("Languages").set("English", ["Good knowledge"]);
        this._cv.get("EN").get("Languages").set("French", ["Basic knowledge"]);

        this._cv.get("EN").set("​Computer skills", new Map<string, Array<string>>());

        this._cv.get("EN").get("​Computer skills").set("JAVA", ["Very good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set(".NET", ["Very good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set("HTML", ["Good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set("CSS", ["Good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set("SQL", ["Very good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set("Angular.js & Node.js", ["Very good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set("Android & iOS (Swift)", ["Good knowledge"]);
        this._cv.get("EN").get("​Computer skills").set("Microsoft Office", ["Very good knowledge"]);

        this._cv.get("EN").set("Interesses", new Map<string,Array<string>>());
        this._cv.get("EN").get("Interesses").set("Sport", ["Most of the time I play footbal but I enjoy every sport"]);
        this._cv.get("EN").get("Interesses").set("Programming", []);

        this._cv.set("FR", new Map<string, Map<string, Array<string>>>());

        this._cv.get("FR").set("​Informations personnelles", new Map<string, Array<string>>());

        this._cv.get("FR").get("​Informations personnelles").set("Nom de famille", ["Defta"]);
        this._cv.get("FR").get("​Informations personnelles").set("Prénom", ["Daniel"]);
        this._cv.get("FR").get("​Informations personnelles").set("Date de naissance", ["12/12/1996"]);
        this._cv.get("FR").get("​Informations personnelles").set("Lieu de naissance", ["Rimnicu Vilcea​"]);
        this._cv.get("FR").get("​Informations personnelles").set("Nationalité", ["Roemeens"]);
        this._cv.get("FR").get("​Informations personnelles").set("Adresse", ["Albrecht Rodenbachstraat 42/0006​"]);
        this._cv.get("FR").get("​Informations personnelles").set("Lieu", ["Denderleeuw"]);
        this._cv.get("FR").get("​Informations personnelles").set("E-mail", ["danieldefta@yahoo.com​"]);
        this._cv.get("FR").get("​Informations personnelles").set("Numéro de téléphone", ["0499929737"]);

        this._cv.get("FR").set("​Éducation", new Map<string, Array<string>>());

        this._cv.get("FR").get("​Éducation").set("2015-à présent", ["Bachelor en informatique appliquée", "Hogeschool Gent"]);
        this._cv.get("FR").get("​Éducation").set("2013-2015", ["Informatique industrielle", "Sint-Jozef Instituut - Geraardsbergen"]);
        this._cv.get("FR").get("​Éducation").set("2012-2013", ["​OKAN (Classe d'accueil pour les nouveaux arrivants)", "Sint-Jozef Instituut - Geraardsbergen"]);
        this._cv.get("FR").get("​Éducation").set("2011-1012", ["Mathématiques-Informatique", "CNI Matei Basarab - Rm. Vilcea"]);

        this._cv.get("FR").set("Langues", new Map<string, Array<string>>());

        this._cv.get("FR").get("Langues").set("Roumain", ["Langue maternelle"]);
        this._cv.get("FR").get("Langues").set("Néerlandais", ["Bonne connaissance"]);
        this._cv.get("FR").get("Langues").set("Anglais", ["Bonne connaissance"]);
        this._cv.get("FR").get("Langues").set("Français", ["Notions de base"]);

        this._cv.get("FR").set("Compétences informatiques", new Map<string, Array<string>>());

        this._cv.get("FR").get("Compétences informatiques").set("JAVA", ["​Très bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set(".NET", ["​Très bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set("HTML", ["​Bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set("CSS", ["​Bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set("SQL", ["​Très bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set("Angular.js & Node.js", ["​Très bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set("Android & iOS (Swift)", ["​Bonne connaissance"]);
        this._cv.get("FR").get("Compétences informatiques").set("Microsoft Office", ["​Très bonne connaissance"]);

        this._cv.get("FR").set("Interesses", new Map<string,Array<string>>());
        this._cv.get("FR").get("Interesses").set("Sport", ["Tous les sports en général"]);
        this._cv.get("FR").get("Interesses").set("Programmer", []);
        this.vulGegevens();
    }

    vulGegevens() {
    }
}