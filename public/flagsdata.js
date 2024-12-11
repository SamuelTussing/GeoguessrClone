const countries = [
    { code: 'AF', name: 'Afghanistan', continent: 'Asie' },
    { code: 'AL', name: 'Albanie', continent: 'Europe' },
    { code: 'DZ', name: 'Algérie', continent: 'Afrique' },
    { code: 'AS', name: 'Samoa américaines', continent: 'Océanie' },
    { code: 'AD', name: 'Andorre', continent: 'Europe' },
    { code: 'AO', name: 'Angola', continent: 'Afrique' },
    { code: 'AI', name: 'Anguilla', continent: 'Amérique' },
    { code: 'AQ', name: 'Antarctique', continent: 'Antarctique' },
    { code: 'AG', name: 'Antigua-et-Barbuda', continent: 'Amérique' },
    { code: 'AR', name: 'Argentine', continent: 'Amérique' },
    { code: 'AM', name: 'Arménie', continent: 'Asie' },
    { code: 'AW', name: 'Aruba', continent: 'Amérique' },
    { code: 'AU', name: 'Australie', continent: 'Océanie' },
    { code: 'AT', name: 'Autriche', continent: 'Europe' },
    { code: 'AZ', name: 'Azerbaïdjan', continent: 'Asie' },
    { code: 'BS', name: 'Bahamas', continent: 'Amérique' },
    { code: 'BH', name: 'Bahreïn', continent: 'Asie' },
    { code: 'BD', name: 'Bangladesh', continent: 'Asie' },
    { code: 'BB', name: 'Barbade', continent: 'Amérique' },
    { code: 'BY', name: 'Biélorussie', continent: 'Europe' },
    { code: 'BE', name: 'Belgique', continent: 'Europe' },
    { code: 'BZ', name: 'Belize', continent: 'Amérique' },
    { code: 'BJ', name: 'Bénin', continent: 'Afrique' },
    { code: 'BM', name: 'Bermudes', continent: 'Amérique' },
    { code: 'BT', name: 'Bhoutan', continent: 'Asie' },
    { code: 'BO', name: 'Bolivie', continent: 'Amérique' },
    { code: 'BQ', name: 'Bonaire, Saint-Eustache et Saba', continent: 'Amérique' },
    { code: 'BA', name: 'Bosnie-Herzégovine', continent: 'Europe' },
    { code: 'BW', name: 'Botswana', continent: 'Afrique' },
    { code: 'BV', name: 'Île Bouvet', continent: 'Antarctique' },
    { code: 'BR', name: 'Brésil', continent: 'Amérique' },
    { code: 'IO', name: 'Territoire britannique de l’océan Indien', continent: 'Asie' },
    { code: 'BN', name: 'Brunei', continent: 'Asie' },
    { code: 'BG', name: 'Bulgarie', continent: 'Europe' },
    { code: 'BF', name: 'Burkina Faso', continent: 'Afrique' },
    { code: 'BI', name: 'Burundi', continent: 'Afrique' },
    { code: 'CV', name: 'Cap-Vert', continent: 'Afrique' },
    { code: 'KH', name: 'Cambodge', continent: 'Asie' },
    { code: 'CM', name: 'Cameroun', continent: 'Afrique' },
    { code: 'CA', name: 'Canada', continent: 'Amérique' },
    { code: 'KY', name: 'Îles Caïmans', continent: 'Amérique' },
    { code: 'CF', name: 'République Centrafricaine', continent: 'Afrique' },
    { code: 'TD', name: 'Tchad', continent: 'Afrique' },
    { code: 'CL', name: 'Chili', continent: 'Amérique' },
    { code: 'CN', name: 'Chine', continent: 'Asie' },
    { code: 'CX', name: 'Île Christmas', continent: 'Océanie' },
    { code: 'CC', name: 'Îles Cocos', continent: 'Océanie' },
    { code: 'CO', name: 'Colombie', continent: 'Amérique' },
    { code: 'KM', name: 'Comores', continent: 'Afrique' },
    { code: 'CD', name: 'République démocratique du Congo', continent: 'Afrique' },
    { code: 'CG', name: 'Congo', continent: 'Afrique' },
    { code: 'CK', name: 'Îles Cook', continent: 'Océanie' },
    { code: 'CR', name: 'Costa Rica', continent: 'Amérique' },
    { code: 'HR', name: 'Croatie', continent: 'Europe' },
    { code: 'CU', name: 'Cuba', continent: 'Amérique' },
    { code: 'CW', name: 'Curaçao', continent: 'Amérique' },
    { code: 'CY', name: 'Chypre', continent: 'Europe' },
    { code: 'CZ', name: 'République tchèque', continent: 'Europe' },
    { code: 'DK', name: 'Danemark', continent: 'Europe' },
    { code: 'DJ', name: 'Djibouti', continent: 'Afrique' },
    { code: 'DM', name: 'Dominique', continent: 'Amérique' },
    { code: 'DO', name: 'République dominicaine', continent: 'Amérique' },
    { code: 'EC', name: 'Équateur', continent: 'Amérique' },
    { code: 'EG', name: 'Égypte', continent: 'Afrique' },
    { code: 'SV', name: 'El Salvador', continent: 'Amérique' },
    { code: 'GQ', name: 'Guinée équatoriale', continent: 'Afrique' },
    { code: 'ER', name: 'Érythrée', continent: 'Afrique' },
    { code: 'EE', name: 'Estonie', continent: 'Europe' },
    { code: 'SZ', name: 'Eswatini', continent: 'Afrique' },
    { code: 'ET', name: 'Éthiopie', continent: 'Afrique' },
    { code: 'FK', name: 'Îles Malouines', continent: 'Amérique' },
    { code: 'FO', name: 'Îles Féroé', continent: 'Europe' },
    { code: 'FJ', name: 'Fidji', continent: 'Océanie' },
    { code: 'FI', name: 'Finlande', continent: 'Europe' },
    { code: 'FR', name: 'France', continent: 'Europe' },
    { code: 'GF', name: 'Guyane française', continent: 'Amérique' },
    { code: 'PF', name: 'Polynésie française', continent: 'Océanie' },
    { code: 'GA', name: 'Gabon', continent: 'Afrique' },
    { code: 'GM', name: 'Gambie', continent: 'Afrique' },
    { code: 'GE', name: 'Géorgie', continent: 'Asie' },
    { code: 'DE', name: 'Allemagne', continent: 'Europe' },
    { code: 'GH', name: 'Ghana', continent: 'Afrique' },
    { code: 'GI', name: 'Gibraltar', continent: 'Europe' },
    { code: 'GR', name: 'Grèce', continent: 'Europe' },
    { code: 'GL', name: 'Groenland', continent: 'Amérique' },
    { code: 'GD', name: 'Grenade', continent: 'Amérique' },
    { code: 'GP', name: 'Guadeloupe', continent: 'Amérique' },
    { code: 'GU', name: 'Guam', continent: 'Océanie' },
    { code: 'GT', name: 'Guatémala', continent: 'Amérique' },
    { code: 'GG', name: 'Guernesey', continent: 'Europe' },
    { code: 'GN', name: 'Guinée', continent: 'Afrique' },
    { code: 'GW', name: 'Guinée-Bissau', continent: 'Afrique' },
    { code: 'GY', name: 'Guyana', continent: 'Amérique' },
    { code: 'HT', name: 'Haïti', continent: 'Amérique' },
    { code: 'HM', name: 'Îles Heard et McDonald', continent: 'Antarctique' },
    { code: 'HN', name: 'Honduras', continent: 'Amérique' },
    { code: 'HK', name: 'Hong Kong', continent: 'Asie' },
    { code: 'HU', name: 'Hongrie', continent: 'Europe' },
    { code: 'IS', name: 'Islande', continent: 'Europe' },
    { code: 'IN', name: 'Inde', continent: 'Asie' },
    { code: 'ID', name: 'Indonésie', continent: 'Asie' },
    { code: 'IR', name: 'Iran', continent: 'Asie' },
    { code: 'IQ', name: 'Irak', continent: 'Asie' },
    { code: 'IE', name: 'Irlande', continent: 'Europe' },
    { code: 'IM', name: 'Île de Man', continent: 'Europe' },
    { code: 'IL', name: 'Israël', continent: 'Asie' },
    { code: 'IT', name: 'Italie', continent: 'Europe' },
    { code: 'CI', name: 'Côte d’Ivoire', continent: 'Afrique' },
    { code: 'JM', name: 'Jamaïque', continent: 'Amérique' },
    { code: 'JP', name: 'Japon', continent: 'Asie' },
    { code: 'JE', name: 'Jersey', continent: 'Europe' },
    { code: 'JO', name: 'Jordanie', continent: 'Asie' },
    { code: 'KZ', name: 'Kazakhstan', continent: 'Asie' },
    { code: 'KE', name: 'Kenya', continent: 'Afrique' },
    { code: 'KI', name: 'Kiribati', continent: 'Océanie' },
    { code: 'KP', name: 'Corée du Nord', continent: 'Asie' },
    { code: 'KR', name: 'Corée du Sud', continent: 'Asie' },
    { code: 'KW', name: 'Koweït', continent: 'Asie' },
    { code: 'KG', name: 'Kirghizistan', continent: 'Asie' },
    { code: 'LA', name: 'Laos', continent: 'Asie' },
    { code: 'LV', name: 'Lettonie', continent: 'Europe' },
    { code: 'LB', name: 'Liban', continent: 'Asie' },
    { code: 'LS', name: 'Lesotho', continent: 'Afrique' },
    { code: 'LR', name: 'Libéria', continent: 'Afrique' },
    { code: 'LY', name: 'Libye', continent: 'Afrique' },
    { code: 'LI', name: 'Liechtenstein', continent: 'Europe' },
    { code: 'LT', name: 'Lituanie', continent: 'Europe' },
    { code: 'LU', name: 'Luxembourg', continent: 'Europe' },
    { code: 'MO', name: 'Macao', continent: 'Asie' },
    { code: 'MG', name: 'Madagascar', continent: 'Afrique' },
    { code: 'MW', name: 'Malawi', continent: 'Afrique' },
    { code: 'MY', name: 'Malaisie', continent: 'Asie' },
    { code: 'MV', name: 'Maldives', continent: 'Asie' },
    { code: 'ML', name: 'Mali', continent: 'Afrique' },
    { code: 'MT', name: 'Malte', continent: 'Europe' },
    { code: 'MH', name: 'Îles Marshall', continent: 'Océanie' },
    { code: 'MQ', name: 'Martinique', continent: 'Amérique' },
    { code: 'MR', name: 'Mauritanie', continent: 'Afrique' },
    { code: 'MU', name: 'Maurice', continent: 'Afrique' },
    { code: 'YT', name: 'Mayotte', continent: 'Afrique' },
    { code: 'MX', name: 'Mexique', continent: 'Amérique' },
    { code: 'FM', name: 'Micronésie', continent: 'Océanie' },
    { code: 'MD', name: 'Moldavie', continent: 'Europe' },
    { code: 'MC', name: 'Monaco', continent: 'Europe' },
    { code: 'MN', name: 'Mongolie', continent: 'Asie' },
    { code: 'ME', name: 'Monténégro', continent: 'Europe' },
    { code: 'MS', name: 'Montserrat', continent: 'Amérique' },
    { code: 'MA', name: 'Maroc', continent: 'Afrique' },
    { code: 'MZ', name: 'Mozambique', continent: 'Afrique' },
    { code: 'MM', name: 'Myanmar (Birmanie)', continent: 'Asie' },
    { code: 'NA', name: 'Namibie', continent: 'Afrique' },
    { code: 'NR', name: 'Nauru', continent: 'Océanie' },
    { code: 'NP', name: 'Népal', continent: 'Asie' },
    { code: 'NL', name: 'Pays-Bas', continent: 'Europe' },
    { code: 'NC', name: 'Nouvelle-Calédonie', continent: 'Océanie' },
    { code: 'NZ', name: 'Nouvelle-Zélande', continent: 'Océanie' },
    { code: 'NI', name: 'Nicaragua', continent: 'Amérique' },
    { code: 'NE', name: 'Niger', continent: 'Afrique' },
    { code: 'NG', name: 'Nigeria', continent: 'Afrique' },
    { code: 'NU', name: 'Niue', continent: 'Océanie' },
    { code: 'NF', name: 'Île Norfolk', continent: 'Océanie' },
    { code: 'MK', name: 'Macédoine du Nord', continent: 'Europe' },
    { code: 'MP', name: 'Îles Mariannes du Nord', continent: 'Océanie' },
    { code: 'NO', name: 'Norvège', continent: 'Europe' },
    { code: 'OM', name: 'Oman', continent: 'Asie' },
    { code: 'PK', name: 'Pakistan', continent: 'Asie' },
    { code: 'PW', name: 'Palaos', continent: 'Océanie' },
    { code: 'PS', name: 'Palestine', continent: 'Asie' },
    { code: 'PA', name: 'Panama', continent: 'Amérique' },
    { code: 'PG', name: 'Papouasie-Nouvelle-Guinée', continent: 'Océanie' },
    { code: 'PY', name: 'Paraguay', continent: 'Amérique' },
    { code: 'PE', name: 'Pérou', continent: 'Amérique' },
    { code: 'PH', name: 'Philippines', continent: 'Asie' },
    { code: 'PN', name: 'Îles Pitcairn', continent: 'Océanie' },
    { code: 'PL', name: 'Pologne', continent: 'Europe' },
    { code: 'PT', name: 'Portugal', continent: 'Europe' },
    { code: 'PR', name: 'Porto Rico', continent: 'Amérique' },
    { code: 'QA', name: 'Qatar', continent: 'Asie' },
    { code: 'RE', name: 'La Réunion', continent: 'Afrique' },
    { code: 'RO', name: 'Roumanie', continent: 'Europe' },
    { code: 'RU', name: 'Russie', continent: 'Europe' },
    { code: 'RW', name: 'Rwanda', continent: 'Afrique' },
    { code: 'BL', name: 'Saint-Barthélemy', continent: 'Amérique' },
    { code: 'SH', name: 'Sainte-Hélène, Ascension et Tristan da Cunha', continent: 'Afrique' },
    { code: 'KN', name: 'Saint-Kitts-et-Nevis', continent: 'Amérique' },
    { code: 'LC', name: 'Sainte-Lucie', continent: 'Amérique' },
    { code: 'MF', name: 'Saint-Martin', continent: 'Amérique' },
    { code: 'PM', name: 'Saint-Pierre-et-Miquelon', continent: 'Amérique' },
    { code: 'VC', name: 'Saint-Vincent-et-les-Grenadines', continent: 'Amérique' },
    { code: 'WS', name: 'Samoa', continent: 'Océanie' },
    { code: 'SM', name: 'Saint-Marin', continent: 'Europe' },
    { code: 'ST', name: 'Sao Tomé-et-Principe', continent: 'Afrique' },
    { code: 'SA', name: 'Arabie saoudite', continent: 'Asie' },
    { code: 'SN', name: 'Sénégal', continent: 'Afrique' },
    { code: 'RS', name: 'Serbie', continent: 'Europe' },
    { code: 'SC', name: 'Seychelles', continent: 'Afrique' },
    { code: 'SL', name: 'Sierra Leone', continent: 'Afrique' },
    { code: 'SG', name: 'Singapour', continent: 'Asie' },
    { code: 'SX', name: 'Saint-Martin', continent: 'Amérique' },
    { code: 'SK', name: 'Slovaquie', continent: 'Europe' },
    { code: 'SI', name: 'Slovénie', continent: 'Europe' },
    { code: 'SB', name: 'Îles Salomon', continent: 'Océanie' },
    { code: 'SO', name: 'Somalie', continent: 'Afrique' },
    { code: 'ZA', name: 'Afrique du Sud', continent: 'Afrique' },
    { code: 'GS', name: 'Géorgie du Sud-et-les Îles Sandwich du Sud', continent: 'Amérique' },
    { code: 'SS', name: 'Soudan du Sud', continent: 'Afrique' },
    { code: 'ES', name: 'Espagne', continent: 'Europe' },
    { code: 'LK', name: 'Sri Lanka', continent: 'Asie' },
    { code: 'SD', name: 'Soudan', continent: 'Afrique' },
    { code: 'SR', name: 'Suriname', continent: 'Amérique' },
    { code: 'SJ', name: 'Svalbard et Île Jan Mayen', continent: 'Europe' },
    { code: 'SZ', name: 'Eswatini', continent: 'Afrique' },
    { code: 'SE', name: 'Suède', continent: 'Europe' },
    { code: 'CH', name: 'Suisse', continent: 'Europe' },
    { code: 'SY', name: 'Syrie', continent: 'Asie' },
    { code: 'TW', name: 'Taïwan', continent: 'Asie' },
    { code: 'TJ', name: 'Tadjikistan', continent: 'Asie' },
    { code: 'TZ', name: 'Tanzanie', continent: 'Afrique' },
    { code: 'TH', name: 'Thaïlande', continent: 'Asie' },
    { code: 'TL', name: 'Timor-Leste', continent: 'Asie' },
    { code: 'TG', name: 'Togo', continent: 'Afrique' },
    { code: 'TK', name: 'Tokelau', continent: 'Océanie' },
    { code: 'TO', name: 'Tonga', continent: 'Océanie' },
    { code: 'TT', name: 'Trinité-et-Tobago', continent: 'Amérique' },
    { code: 'TN', name: 'Tunisie', continent: 'Afrique' },
    { code: 'TR', name: 'Turquie', continent: 'Asie' },
    { code: 'TM', name: 'Turkménistan', continent: 'Asie' },
    { code: 'TC', name: 'Îles Turques-et-Caïques', continent: 'Amérique' },
    { code: 'TV', name: 'Tuvalu', continent: 'Océanie' },
    { code: 'UG', name: 'Ouganda', continent: 'Afrique' },
    { code: 'UA', name: 'Ukraine', continent: 'Europe' },
    { code: 'AE', name: 'Émirats arabes unis', continent: 'Asie' },
    { code: 'GB', name: 'Royaume-Uni', continent: 'Europe' },
    { code: 'US', name: 'États-Unis', continent: 'Amérique' },
    { code: 'UY', name: 'Uruguay', continent: 'Amérique' },
    { code: 'UZ', name: 'Ouzbékistan', continent: 'Asie' },
    { code: 'VU', name: 'Vanuatu', continent: 'Océanie' },
    { code: 'VA', name: 'Vatican', continent: 'Europe' },
    { code: 'VE', name: 'Venezuela', continent: 'Amérique' },
    { code: 'VN', name: 'Vietnam', continent: 'Asie' },
    { code: 'EH', name: 'Sahara occidental', continent: 'Afrique' },
    { code: 'YE', name: 'Yémen', continent: 'Asie' },
    { code: 'ZM', name: 'Zambie', continent: 'Afrique' },
    { code: 'ZW', name: 'Zimbabwe', continent: 'Afrique' }
  ];