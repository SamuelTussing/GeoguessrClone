const locations = [
    // Europe
        //FRANCE
        { lat: 48.8566, lng: 2.3522, continent: 'Europe', pays: 'France', ville: 'Paris' },
        { lat: 45.7640, lng: 4.8357, continent: 'Europe', pays: 'France', ville: 'Lyon' },
        { lat: 43.7102, lng: 7.2620, continent: 'Europe', pays: 'France', ville: 'Nice' },
        { lat: 43.6047, lng: 1.4442, continent: 'Europe', pays: 'France', ville: 'Toulouse' },
        { lat: 47.2184, lng: -1.5536, continent: 'Europe', pays: 'France', ville: 'Nantes' },
        { lat: 44.8378, lng: -0.5792, continent: 'Europe', pays: 'France', ville: 'Bordeaux' },
        { lat: 49.2583, lng: 4.0317, continent: 'Europe', pays: 'France', ville: 'Reims' },
        { lat: 43.2933, lng: 5.3700, continent: 'Europe', pays: 'France', ville: 'Marseille' },
        { lat: 45.1885, lng: 5.7245, continent: 'Europe', pays: 'France', ville: 'Grenoble' },
        { lat: 50.6292, lng: 3.0573, continent: 'Europe', pays: 'France', ville: 'Lille' },
        { lat: 48.5734, lng: 7.7521, continent: 'Europe', pays: 'France', ville: 'Strasbourg' },
        { lat: 49.4432, lng: 1.0993, continent: 'Europe', pays: 'France', ville: 'Rouen' },
        { lat: 47.3220, lng: 5.0415, continent: 'Europe', pays: 'France', ville: 'Dijon' },
        { lat: 50.9616, lng: 1.8508, continent: 'Europe', pays: 'France', ville: 'Calais' },
        { lat: 47.9030, lng: 1.9093, continent: 'Europe', pays: 'France', ville: 'Orléans' },
        { lat: 48.8566, lng: 2.3522, continent: 'Europe', pays: 'France', ville: 'Versailles' },
        { lat: 45.7772, lng: 3.0870, continent: 'Europe', pays: 'France', ville: 'Clermont-Ferrand' },
        { lat: 48.3904, lng: -4.4861, continent: 'Europe', pays: 'France', ville: 'Brest' },
        { lat: 49.2583, lng: 6.1695, continent: 'Europe', pays: 'France', ville: 'Metz' },
        { lat: 49.1193, lng: 6.1757, continent: 'Europe', pays: 'France', ville: 'Nancy' },
        { lat: 47.4712, lng: -0.5523, continent: 'Europe', pays: 'France', ville: 'Angers' },
        { lat: 50.3706, lng: 3.0702, continent: 'Europe', pays: 'France', ville: 'Valenciennes' },
        { lat: 48.8566, lng: 2.3522, continent: 'Europe', pays: 'France', ville: 'Boulogne-Billancourt' },
        { lat: 49.2583, lng: 4.0317, continent: 'Europe', pays: 'France', ville: 'Châlons-en-Champagne' },
        { lat: 45.7772, lng: 3.0870, continent: 'Europe', pays: 'France', ville: 'Vichy' },
        { lat: 47.9030, lng: 1.9093, continent: 'Europe', pays: 'France', ville: 'Blois' },
        { lat: 45.8985, lng: 6.1294, continent: 'Europe', pays: 'France', ville: 'Annecy' },
        { lat: 48.5796, lng: 7.5808, continent: 'Europe', pays: 'France', ville: 'Colmar' },
        { lat: 47.8431, lng: 1.9398, continent: 'Europe', pays: 'France', ville: 'Vendôme' },
        { lat: 48.5734, lng: 7.7521, continent: 'Europe', pays: 'France', ville: 'Mulhouse' },
        { lat: 45.8992, lng: 6.1295, continent: 'Europe', pays: 'France', ville: 'Thonon-les-Bains' },
        { lat: 48.9458, lng: 2.2529, continent: 'Europe', pays: 'France', ville: 'Asnières-sur-Seine' },
        { lat: 47.0763, lng: 2.3994, continent: 'Europe', pays: 'France', ville: 'Bourges' },
        { lat: 49.4444, lng: 1.1050, continent: 'Europe', pays: 'France', ville: 'Sotteville-lès-Rouen' },
        { lat: 47.3823, lng: -0.6586, continent: 'Europe', pays: 'France', ville: 'Cholet' },
        { lat: 48.5936, lng: 2.4748, continent: 'Europe', pays: 'France', ville: 'Évry' },
        { lat: 43.6893, lng: 7.1794, continent: 'Europe', pays: 'France', ville: 'Antibes' },
        { lat: 49.7689, lng: 4.7249, continent: 'Europe', pays: 'France', ville: 'Charleville-Mézières' },
        { lat: 43.5255, lng: 5.4454, continent: 'Europe', pays: 'France', ville: 'Aix-en-Provence' },
        { lat: 45.2776, lng: 2.7367, continent: 'Europe', pays: 'France', ville: 'Montluçon' },
        { lat: 48.8588, lng: 2.3200, continent: 'Europe', pays: 'France', ville: 'Levallois-Perret' },
        { lat: 48.8503, lng: 2.2923, continent: 'Europe', pays: 'France', ville: 'Courbevoie' },
        { lat: 48.9540, lng: 2.2544, continent: 'Europe', pays: 'France', ville: 'Colombes' },
        { lat: 50.6366, lng: 3.0686, continent: 'Europe', pays: 'France', ville: 'Roubaix' },
        { lat: 50.6911, lng: 3.1834, continent: 'Europe', pays: 'France', ville: 'Tourcoing' },
        { lat: 48.8566, lng: 2.4901, continent: 'Europe', pays: 'France', ville: 'Montreuil' },
        { lat: 45.8352, lng: 1.2620, continent: 'Europe', pays: 'France', ville: 'Limoges' },
        { lat: 48.7966, lng: 2.2872, continent: 'Europe', pays: 'France', ville: 'Versailles' },
        { lat: 48.8156, lng: 2.3625, continent: 'Europe', pays: 'France', ville: 'Vitry-sur-Seine' },
        { lat: 43.6074, lng: 3.9129, continent: 'Europe', pays: 'France', ville: 'Montpellier' },
        { lat: 48.8049, lng: 2.1295, continent: 'Europe', pays: 'France', ville: 'Saint-Germain-en-Laye' },

        //Allemagne
        { lat: 52.5200, lng: 13.4050, continent: 'Europe', pays: 'Allemagne', ville: 'Berlin' },
        { lat: 48.1351, lng: 11.5820, continent: 'Europe', pays: 'Allemagne', ville: 'Munich' },
        { lat: 50.1109, lng: 8.6821, continent: 'Europe', pays: 'Allemagne', ville: 'Francfort' },
        { lat: 53.5511, lng: 9.9937, continent: 'Europe', pays: 'Allemagne', ville: 'Hambourg' },
        { lat: 51.1657, lng: 10.4515, continent: 'Europe', pays: 'Allemagne', ville: 'Hanovre' },
        { lat: 50.9375, lng: 6.9603, continent: 'Europe', pays: 'Allemagne', ville: 'Cologne' },
        { lat: 48.7758, lng: 9.1829, continent: 'Europe', pays: 'Allemagne', ville: 'Stuttgart' },
        { lat: 51.2277, lng: 6.7735, continent: 'Europe', pays: 'Allemagne', ville: 'Düsseldorf' },
        { lat: 49.4875, lng: 8.4660, continent: 'Europe', pays: 'Allemagne', ville: 'Mannheim' },
        { lat: 51.0504, lng: 13.7373, continent: 'Europe', pays: 'Allemagne', ville: 'Dresde' },
        { lat: 50.8269, lng: 12.9209, continent: 'Europe', pays: 'Allemagne', ville: 'Chemnitz' },
        { lat: 51.3127, lng: 9.4797, continent: 'Europe', pays: 'Allemagne', ville: 'Kassel' },
        { lat: 49.0094, lng: 8.4044, continent: 'Europe', pays: 'Allemagne', ville: 'Karlsruhe' },
        { lat: 50.3569, lng: 7.5881, continent: 'Europe', pays: 'Allemagne', ville: 'Coblence' },
        { lat: 48.4011, lng: 9.9876, continent: 'Europe', pays: 'Allemagne', ville: 'Ulm' },
        { lat: 49.4521, lng: 11.0767, continent: 'Europe', pays: 'Allemagne', ville: 'Nuremberg' },
        { lat: 50.7260, lng: 7.0968, continent: 'Europe', pays: 'Allemagne', ville: 'Bonn' },
        { lat: 51.5136, lng: 7.4653, continent: 'Europe', pays: 'Allemagne', ville: 'Dortmund' },
        { lat: 53.0758, lng: 8.8072, continent: 'Europe', pays: 'Allemagne', ville: 'Brême' },
        { lat: 49.0134, lng: 12.1016, continent: 'Europe', pays: 'Allemagne', ville: 'Ratisbonne' },
        { lat: 50.7753, lng: 6.0839, continent: 'Europe', pays: 'Allemagne', ville: 'Aix-la-Chapelle' },
        { lat: 48.1371, lng: 11.5764, continent: 'Europe', pays: 'Allemagne', ville: 'Erding' },
        { lat: 50.5614, lng: 8.6753, continent: 'Europe', pays: 'Allemagne', ville: 'Gießen' },
        { lat: 48.0833, lng: 11.2833, continent: 'Europe', pays: 'Allemagne', ville: 'Starnberg' },
        { lat: 49.9937, lng: 7.9067, continent: 'Europe', pays: 'Allemagne', ville: 'Bingen am Rhein' },
        { lat: 48.8660, lng: 9.1500, continent: 'Europe', pays: 'Allemagne', ville: 'Sindelfingen' },
        { lat: 51.4447, lng: 7.4985, continent: 'Europe', pays: 'Allemagne', ville: 'Bochum' },
        { lat: 52.2689, lng: 10.5268, continent: 'Europe', pays: 'Allemagne', ville: 'Braunschweig' },
        { lat: 48.0165, lng: 7.8348, continent: 'Europe', pays: 'Allemagne', ville: 'Freiburg im Breisgau' },
        { lat: 49.0053, lng: 8.3928, continent: 'Europe', pays: 'Allemagne', ville: 'Pforzheim' },
        { lat: 53.5406, lng: 10.0000, continent: 'Europe', pays: 'Allemagne', ville: 'Wandsbek' },
        { lat: 51.4960, lng: 7.4795, continent: 'Europe', pays: 'Allemagne', ville: 'Herne' },
        { lat: 49.7878, lng: 9.9363, continent: 'Europe', pays: 'Allemagne', ville: 'Würzburg' },
        { lat: 50.0833, lng: 8.2500, continent: 'Europe', pays: 'Allemagne', ville: 'Wiesbaden' },
        { lat: 51.5072, lng: 7.2352, continent: 'Europe', pays: 'Allemagne', ville: 'Hagen' },
        { lat: 50.9423, lng: 6.9748, continent: 'Europe', pays: 'Allemagne', ville: 'Leverkusen' },
        { lat: 51.2342, lng: 6.7902, continent: 'Europe', pays: 'Allemagne', ville: 'Mönchengladbach' },
        { lat: 51.3093, lng: 9.4906, continent: 'Europe', pays: 'Allemagne', ville: 'Marburg' },
        { lat: 48.6972, lng: 9.6462, continent: 'Europe', pays: 'Allemagne', ville: 'Esslingen am Neckar' },
        { lat: 53.8674, lng: 10.6866, continent: 'Europe', pays: 'Allemagne', ville: 'Lübeck' },
        { lat: 49.8988, lng: 8.6315, continent: 'Europe', pays: 'Allemagne', ville: 'Darmstadt' },
        { lat: 51.0277, lng: 13.7383, continent: 'Europe', pays: 'Allemagne', ville: 'Meissen' },
        { lat: 49.4727, lng: 7.7706, continent: 'Europe', pays: 'Allemagne', ville: 'Kaiserslautern' },
        { lat: 51.5336, lng: 9.9356, continent: 'Europe', pays: 'Allemagne', ville: 'Göttingen' },
        { lat: 48.8708, lng: 11.8675, continent: 'Europe', pays: 'Allemagne', ville: 'Ingolstadt' },
        { lat: 49.7850, lng: 9.9365, continent: 'Europe', pays: 'Allemagne', ville: 'Schweinfurt' },
        { lat: 50.4017, lng: 8.0846, continent: 'Europe', pays: 'Allemagne', ville: 'Limburg an der Lahn' },
        { lat: 50.6467, lng: 6.2833, continent: 'Europe', pays: 'Allemagne', ville: 'Euskirchen' },
        { lat: 50.7205, lng: 7.0803, continent: 'Europe', pays: 'Allemagne', ville: 'Bad Godesberg' },
        { lat: 48.7079, lng: 8.9653, continent: 'Europe', pays: 'Allemagne', ville: 'Schwäbisch Gmünd' },
        { lat: 49.4094, lng: 11.1382, continent: 'Europe', pays: 'Allemagne', ville: 'Ansbach' },
        //Espagne
        { lat: 40.4168, lng: -3.7038, continent: 'Europe', pays: 'Espagne', ville: 'Madrid' },
    { lat: 41.3851, lng: 2.1734, continent: 'Europe', pays: 'Espagne', ville: 'Barcelone' },
    { lat: 37.3891, lng: -5.9845, continent: 'Europe', pays: 'Espagne', ville: 'Séville' },
    { lat: 39.4699, lng: -0.3763, continent: 'Europe', pays: 'Espagne', ville: 'Valence' },
    { lat: 36.7213, lng: -4.4214, continent: 'Europe', pays: 'Espagne', ville: 'Malaga' },
    { lat: 43.2630, lng: -2.9350, continent: 'Europe', pays: 'Espagne', ville: 'Bilbao' },
    { lat: 39.8628, lng: -4.0273, continent: 'Europe', pays: 'Espagne', ville: 'Tolède' },
    { lat: 37.1765, lng: -3.5979, continent: 'Europe', pays: 'Espagne', ville: 'Grenade' },
    { lat: 43.5322, lng: -5.6611, continent: 'Europe', pays: 'Espagne', ville: 'Oviedo' },
    { lat: 38.7167, lng: -9.1400, continent: 'Europe', pays: 'Espagne', ville: 'Lisbonne' },
    { lat: 36.8333, lng: -2.4500, continent: 'Europe', pays: 'Espagne', ville: 'Almeria' },
    { lat: 37.9886, lng: -1.1300, continent: 'Europe', pays: 'Espagne', ville: 'Murcie' },
    { lat: 42.8828, lng: -8.5444, continent: 'Europe', pays: 'Espagne', ville: 'Saint-Jacques-de-Compostelle' },
    { lat: 28.1235, lng: -15.4363, continent: 'Europe', pays: 'Espagne', ville: 'Las Palmas' },
    { lat: 36.5267, lng: -6.2907, continent: 'Europe', pays: 'Espagne', ville: 'Jerez de la Frontera' },
    { lat: 41.6561, lng: -0.8773, continent: 'Europe', pays: 'Espagne', ville: 'Saragosse' },
    { lat: 39.5910, lng: 2.6542, continent: 'Europe', pays: 'Espagne', ville: 'Palma' },
    { lat: 43.2983, lng: -1.9886, continent: 'Europe', pays: 'Espagne', ville: 'Saint-Sébastien' },
    { lat: 37.1773, lng: -3.5986, continent: 'Europe', pays: 'Espagne', ville: 'Cordoue' },
    { lat: 43.4623, lng: -3.8070, continent: 'Europe', pays: 'Espagne', ville: 'Santander' },
    { lat: 40.4637, lng: -3.7492, continent: 'Europe', pays: 'Espagne', ville: 'Guadalajara' },
    { lat: 40.6428, lng: -4.1222, continent: 'Europe', pays: 'Espagne', ville: 'Ségovie' },
    { lat: 38.5411, lng: -0.1211, continent: 'Europe', pays: 'Espagne', ville: 'Alicante' },
    { lat: 43.2603, lng: -2.9381, continent: 'Europe', pays: 'Espagne', ville: 'Getxo' },
    { lat: 40.3310, lng: -3.7670, continent: 'Europe', pays: 'Espagne', ville: 'Móstoles' },
    { lat: 41.5397, lng: 2.4447, continent: 'Europe', pays: 'Espagne', ville: 'Badalona' },
    { lat: 41.2230, lng: 1.7257, continent: 'Europe', pays: 'Espagne', ville: 'Tarragone' },
    { lat: 39.5632, lng: -0.3396, continent: 'Europe', pays: 'Espagne', ville: 'Paterna' },
    { lat: 38.5412, lng: -0.3501, continent: 'Europe', pays: 'Espagne', ville: 'Elche' },
    { lat: 36.5296, lng: -6.2926, continent: 'Europe', pays: 'Espagne', ville: 'Cadix' },
    { lat: 38.8816, lng: -6.9702, continent: 'Europe', pays: 'Espagne', ville: 'Mérida' },
    { lat: 40.2830, lng: -3.7910, continent: 'Europe', pays: 'Espagne', ville: 'Fuenlabrada' },
    { lat: 41.6145, lng: -4.7336, continent: 'Europe', pays: 'Espagne', ville: 'Valladolid' },
    { lat: 41.6497, lng: -0.9076, continent: 'Europe', pays: 'Espagne', ville: 'Huesca' },
    { lat: 40.2833, lng: -3.7833, continent: 'Europe', pays: 'Espagne', ville: 'Leganés' },
    { lat: 39.0000, lng: -1.8667, continent: 'Europe', pays: 'Espagne', ville: 'Albacete' },
    { lat: 39.4698, lng: -0.3763, continent: 'Europe', pays: 'Espagne', ville: 'Valence' },
    { lat: 40.6610, lng: -4.6992, continent: 'Europe', pays: 'Espagne', ville: 'Avila' },
    { lat: 41.3848, lng: 2.1760, continent: 'Europe', pays: 'Espagne', ville: 'Hospitalet de Llobregat' },
    { lat: 41.3800, lng: 2.1700, continent: 'Europe', pays: 'Espagne', ville: 'Terrassa' },
    { lat: 38.8951, lng: -1.8616, continent: 'Europe', pays: 'Espagne', ville: 'Alcalá de Henares' },
    { lat: 36.4905, lng: -4.7749, continent: 'Europe', pays: 'Espagne', ville: 'Marbella' },
    { lat: 42.8169, lng: -1.6432, continent: 'Europe', pays: 'Espagne', ville: 'Pampelune' },
    { lat: 42.1373, lng: -0.4087, continent: 'Europe', pays: 'Espagne', ville: 'Barbastro' },
    { lat: 42.8782, lng: -8.5448, continent: 'Europe', pays: 'Espagne', ville: 'La Corogne' },
    { lat: 38.5747, lng: -0.5718, continent: 'Europe', pays: 'Espagne', ville: 'Benidorm' },
    { lat: 38.9784, lng: -3.9308, continent: 'Europe', pays: 'Espagne', ville: 'Ciudad Real' },
    { lat: 36.5318, lng: -6.2957, continent: 'Europe', pays: 'Espagne', ville: 'Puerto Real' },
    { lat: 40.4584, lng: -3.6898, continent: 'Europe', pays: 'Espagne', ville: 'Alcobendas' },
    { lat: 37.6824, lng: -1.6996, continent: 'Europe', pays: 'Espagne', ville: 'Cartagena' },
    { lat: 37.7692, lng: -3.7883, continent: 'Europe', pays: 'Espagne', ville: 'Andujar' },
    { lat: 37.8736, lng: -4.7795, continent: 'Europe', pays: 'Espagne', ville: 'Lucena' },

    //Italie
    { lat: 41.9028, lng: 12.4964, continent: 'Europe', pays: 'Italie', ville: 'Rome' },
    { lat: 45.4642, lng: 9.1900, continent: 'Europe', pays: 'Italie', ville: 'Milan' },
    { lat: 40.8518, lng: 14.2681, continent: 'Europe', pays: 'Italie', ville: 'Naples' },
    { lat: 45.4408, lng: 12.3155, continent: 'Europe', pays: 'Italie', ville: 'Venise' },
    { lat: 44.4949, lng: 11.3426, continent: 'Europe', pays: 'Italie', ville: 'Bologne' },
    { lat: 45.0703, lng: 7.6869, continent: 'Europe', pays: 'Italie', ville: 'Turin' },
    { lat: 43.7696, lng: 11.2558, continent: 'Europe', pays: 'Italie', ville: 'Florence' },
    { lat: 37.5079, lng: 15.0830, continent: 'Europe', pays: 'Italie', ville: 'Catane' },
    { lat: 38.1157, lng: 13.3615, continent: 'Europe', pays: 'Italie', ville: 'Palerme' },
    { lat: 39.2238, lng: 9.1217, continent: 'Europe', pays: 'Italie', ville: 'Cagliari' },
    { lat: 40.6401, lng: 17.6654, continent: 'Europe', pays: 'Italie', ville: 'Lecce' },
    { lat: 45.4384, lng: 10.9916, continent: 'Europe', pays: 'Italie', ville: 'Vérone' },
    { lat: 44.8015, lng: 10.3279, continent: 'Europe', pays: 'Italie', ville: 'Parme' },
    { lat: 45.8880, lng: 11.0325, continent: 'Europe', pays: 'Italie', ville: 'Bassano del Grappa' },
    { lat: 45.4064, lng: 11.8768, continent: 'Europe', pays: 'Italie', ville: 'Padoue' },
    { lat: 44.1391, lng: 12.2466, continent: 'Europe', pays: 'Italie', ville: 'Rimini' },
    { lat: 41.4618, lng: 12.9030, continent: 'Europe', pays: 'Italie', ville: 'Latina' },
    { lat: 38.1938, lng: 15.5540, continent: 'Europe', pays: 'Italie', ville: 'Messine' },
    { lat: 43.3209, lng: 11.3315, continent: 'Europe', pays: 'Italie', ville: 'Sienne' },
    { lat: 43.7228, lng: 10.4017, continent: 'Europe', pays: 'Italie', ville: 'Pise' },
    { lat: 42.4621, lng: 14.2161, continent: 'Europe', pays: 'Italie', ville: 'Pescara' },
    { lat: 41.1171, lng: 16.8719, continent: 'Europe', pays: 'Italie', ville: 'Bari' },
    { lat: 38.7071, lng: 16.1601, continent: 'Europe', pays: 'Italie', ville: 'Crotone' },
    { lat: 40.7920, lng: 14.4989, continent: 'Europe', pays: 'Italie', ville: 'Pompei' },
    { lat: 45.7962, lng: 8.9268, continent: 'Europe', pays: 'Italie', ville: 'Busto Arsizio' },
    { lat: 40.6293, lng: 15.8051, continent: 'Europe', pays: 'Italie', ville: 'Potenza' },
    { lat: 38.0542, lng: 12.5664, continent: 'Europe', pays: 'Italie', ville: 'Trapani' },
    { lat: 45.4668, lng: 11.3493, continent: 'Europe', pays: 'Italie', ville: 'Vicence' },
    { lat: 44.6989, lng: 10.6294, continent: 'Europe', pays: 'Italie', ville: 'Reggio d\'Émilie' },
    { lat: 45.1852, lng: 9.1602, continent: 'Europe', pays: 'Italie', ville: 'Pavie' },
    { lat: 44.3043, lng: 8.4798, continent: 'Europe', pays: 'Italie', ville: 'Savone' },
    { lat: 45.4397, lng: 10.9473, continent: 'Europe', pays: 'Italie', ville: 'Rovigo' },
    { lat: 43.1122, lng: 12.3888, continent: 'Europe', pays: 'Italie', ville: 'Pérouse' },
    { lat: 44.4056, lng: 8.9463, continent: 'Europe', pays: 'Italie', ville: 'Gênes' },
    { lat: 44.0582, lng: 12.5668, continent: 'Europe', pays: 'Italie', ville: 'Césène' },
    { lat: 45.4639, lng: 9.1884, continent: 'Europe', pays: 'Italie', ville: 'Monza' },
    { lat: 37.5000, lng: 15.0903, continent: 'Europe', pays: 'Italie', ville: 'Syracuse' },
    { lat: 38.9085, lng: 16.5861, continent: 'Europe', pays: 'Italie', ville: 'Catanzaro' },
    { lat: 40.8359, lng: 14.2941, continent: 'Europe', pays: 'Italie', ville: 'Salerno' },
    { lat: 37.0841, lng: 15.2730, continent: 'Europe', pays: 'Italie', ville: 'Augusta' },
    { lat: 44.1391, lng: 12.2430, continent: 'Europe', pays: 'Italie', ville: 'Cervia' },
    { lat: 45.4299, lng: 12.3317, continent: 'Europe', pays: 'Italie', ville: 'Mestre' },
    { lat: 45.8792, lng: 8.6813, continent: 'Europe', pays: 'Italie', ville: 'Varese' },
    { lat: 44.4949, lng: 11.3426, continent: 'Europe', pays: 'Italie', ville: 'Bologne' },
    { lat: 44.4056, lng: 8.9463, continent: 'Europe', pays: 'Italie', ville: 'Sanremo' },
    { lat: 45.9072, lng: 8.9835, continent: 'Europe', pays: 'Italie', ville: 'Novare' },
    { lat: 43.5485, lng: 10.3106, continent: 'Europe', pays: 'Italie', ville: 'Livourne' },
    { lat: 37.5985, lng: 15.0613, continent: 'Europe', pays: 'Italie', ville: 'Acireale' },
    { lat: 45.0703, lng: 7.6869, continent: 'Europe', pays: 'Italie', ville: 'Turin' },
    { lat: 45.4773, lng: 9.1815, continent: 'Europe', pays: 'Italie', ville: 'Cinisello Balsamo' },
    
    //Portugal
    { lat: 38.7167, lng: -9.1333, continent: 'Europe', pays: 'Portugal', ville: 'Lisbonne' },
    { lat: 41.1496, lng: -8.6110, continent: 'Europe', pays: 'Portugal', ville: 'Porto' },
    { lat: 40.6405, lng: -8.6538, continent: 'Europe', pays: 'Portugal', ville: 'Aveiro' },
    { lat: 37.0194, lng: -7.9304, continent: 'Europe', pays: 'Portugal', ville: 'Faro' },
    { lat: 39.7450, lng: -8.8070, continent: 'Europe', pays: 'Portugal', ville: 'Batalha' },
    { lat: 38.5697, lng: -7.9075, continent: 'Europe', pays: 'Portugal', ville: 'Évora' },
    { lat: 39.8156, lng: -7.5019, continent: 'Europe', pays: 'Portugal', ville: 'Castelo Branco' },
    { lat: 38.5244, lng: -8.8926, continent: 'Europe', pays: 'Portugal', ville: 'Setúbal' },
    { lat: 38.7223, lng: -9.1393, continent: 'Europe', pays: 'Portugal', ville: 'Cascais' },
    { lat: 41.1851, lng: -8.6592, continent: 'Europe', pays: 'Portugal', ville: 'Matosinhos' },
    { lat: 40.2060, lng: -8.4140, continent: 'Europe', pays: 'Portugal', ville: 'Coimbra' },
    { lat: 39.2890, lng: -7.4217, continent: 'Europe', pays: 'Portugal', ville: 'Marvão' },
    { lat: 41.5408, lng: -8.4213, continent: 'Europe', pays: 'Portugal', ville: 'Braga' },
    { lat: 39.8222, lng: -7.4909, continent: 'Europe', pays: 'Portugal', ville: 'Alpedrinha' },
    { lat: 39.7473, lng: -8.9479, continent: 'Europe', pays: 'Portugal', ville: 'Leiria' },
    { lat: 38.7167, lng: -9.3667, continent: 'Europe', pays: 'Portugal', ville: 'Sintra' },
    { lat: 37.1911, lng: -8.4386, continent: 'Europe', pays: 'Portugal', ville: 'Lagos' },
    { lat: 39.6750, lng: -8.9897, continent: 'Europe', pays: 'Portugal', ville: 'Marinha Grande' },
    { lat: 40.6443, lng: -8.6455, continent: 'Europe', pays: 'Portugal', ville: 'Ílhavo' },
    { lat: 38.0151, lng: -7.8632, continent: 'Europe', pays: 'Portugal', ville: 'Beja' },
    { lat: 41.5372, lng: -8.4212, continent: 'Europe', pays: 'Portugal', ville: 'Guimarães' },
    { lat: 40.9175, lng: -8.5463, continent: 'Europe', pays: 'Portugal', ville: 'Espinho' },
    { lat: 41.8067, lng: -6.7565, continent: 'Europe', pays: 'Portugal', ville: 'Bragance' },
    { lat: 39.2903, lng: -9.1528, continent: 'Europe', pays: 'Portugal', ville: 'Caldas da Rainha' },
    { lat: 40.4475, lng: -7.2370, continent: 'Europe', pays: 'Portugal', ville: 'Guarda' },
    { lat: 38.5725, lng: -9.0847, continent: 'Europe', pays: 'Portugal', ville: 'Almada' },
    { lat: 38.7071, lng: -9.1451, continent: 'Europe', pays: 'Portugal', ville: 'Oeiras' },
    { lat: 41.2050, lng: -8.5600, continent: 'Europe', pays: 'Portugal', ville: 'Vila do Conde' },
    { lat: 37.0163, lng: -7.9322, continent: 'Europe', pays: 'Portugal', ville: 'Olhão' },
    { lat: 39.6031, lng: -9.0732, continent: 'Europe', pays: 'Portugal', ville: 'Peniche' },
    { lat: 40.2110, lng: -8.4293, continent: 'Europe', pays: 'Portugal', ville: 'Figueira da Foz' },
    { lat: 38.6667, lng: -9.5000, continent: 'Europe', pays: 'Portugal', ville: 'Alcochete' },
    { lat: 41.6906, lng: -8.8346, continent: 'Europe', pays: 'Portugal', ville: 'Viana do Castelo' },
    { lat: 38.9833, lng: -8.0833, continent: 'Europe', pays: 'Portugal', ville: 'Santarém' },
    { lat: 40.9639, lng: -8.4689, continent: 'Europe', pays: 'Portugal', ville: 'São João da Madeira' },
    { lat: 37.6898, lng: -7.7872, continent: 'Europe', pays: 'Portugal', ville: 'Mértola' },
    { lat: 38.6767, lng: -8.9734, continent: 'Europe', pays: 'Portugal', ville: 'Montijo' },
    { lat: 41.3771, lng: -8.2460, continent: 'Europe', pays: 'Portugal', ville: 'Amarante' },
    { lat: 41.2716, lng: -7.7496, continent: 'Europe', pays: 'Portugal', ville: 'Vila Real' },
    { lat: 41.5087, lng: -8.6181, continent: 'Europe', pays: 'Portugal', ville: 'Fafe' },
    { lat: 38.5286, lng: -8.8927, continent: 'Europe', pays: 'Portugal', ville: 'Palmela' },
    { lat: 39.2900, lng: -7.4300, continent: 'Europe', pays: 'Portugal', ville: 'Castelo de Vide' },
    { lat: 41.5374, lng: -8.4281, continent: 'Europe', pays: 'Portugal', ville: 'Famalicão' },
    { lat: 39.7475, lng: -8.8077, continent: 'Europe', pays: 'Portugal', ville: 'Fátima' },
    { lat: 37.9371, lng: -8.2388, continent: 'Europe', pays: 'Portugal', ville: 'Sines' },
    { lat: 40.0954, lng: -8.3310, continent: 'Europe', pays: 'Portugal', ville: 'Condeixa-a-Nova' },
    { lat: 40.2969, lng: -8.4487, continent: 'Europe', pays: 'Portugal', ville: 'Montemor-o-Velho' },
    { lat: 41.4594, lng: -8.2969, continent: 'Europe', pays: 'Portugal', ville: 'Celorico de Basto' },
    { lat: 38.5243, lng: -8.8926, continent: 'Europe', pays: 'Portugal', ville: 'Sesimbra' },

    //Pays Bas
    { lat: 52.3702, lng: 4.8952, continent: 'Europe', pays: 'Pays-Bas', ville: 'Amsterdam' },
    { lat: 51.9225, lng: 4.4792, continent: 'Europe', pays: 'Pays-Bas', ville: 'Rotterdam' },
    { lat: 52.0907, lng: 5.1214, continent: 'Europe', pays: 'Pays-Bas', ville: 'Utrecht' },
    { lat: 52.3667, lng: 4.8945, continent: 'Europe', pays: 'Pays-Bas', ville: 'Haarlem' },
    { lat: 52.1601, lng: 4.4970, continent: 'Europe', pays: 'Pays-Bas', ville: 'Leiden' },
    { lat: 52.0928, lng: 5.1045, continent: 'Europe', pays: 'Pays-Bas', ville: 'Amersfoort' },
    { lat: 52.3700, lng: 4.8850, continent: 'Europe', pays: 'Pays-Bas', ville: 'Zaanstad' },
    { lat: 52.2136, lng: 5.9636, continent: 'Europe', pays: 'Pays-Bas', ville: 'Apeldoorn' },
    { lat: 51.8103, lng: 5.8372, continent: 'Europe', pays: 'Pays-Bas', ville: 'Nimègue' },
    { lat: 52.0167, lng: 4.7093, continent: 'Europe', pays: 'Pays-Bas', ville: 'Delft' },
    { lat: 51.5719, lng: 4.7683, continent: 'Europe', pays: 'Pays-Bas', ville: 'Breda' },
    { lat: 52.3058, lng: 4.6955, continent: 'Europe', pays: 'Pays-Bas', ville: 'Alkmaar' },
    { lat: 51.4416, lng: 5.4697, continent: 'Europe', pays: 'Pays-Bas', ville: 'Eindhoven' },
    { lat: 51.8126, lng: 4.6557, continent: 'Europe', pays: 'Pays-Bas', ville: 'Dordrecht' },
    { lat: 52.0116, lng: 4.3571, continent: 'Europe', pays: 'Pays-Bas', ville: 'Zoetermeer' },
    { lat: 52.0167, lng: 4.7100, continent: 'Europe', pays: 'Pays-Bas', ville: 'Gouda' },
    { lat: 51.4920, lng: 3.8600, continent: 'Europe', pays: 'Pays-Bas', ville: 'Middelbourg' },
    { lat: 51.9851, lng: 5.8987, continent: 'Europe', pays: 'Pays-Bas', ville: 'Arnhem' },
    { lat: 52.0900, lng: 5.1210, continent: 'Europe', pays: 'Pays-Bas', ville: 'Nieuwegein' },
    { lat: 51.8175, lng: 4.6764, continent: 'Europe', pays: 'Pays-Bas', ville: 'Schiedam' },
    { lat: 52.2000, lng: 5.5000, continent: 'Europe', pays: 'Pays-Bas', ville: 'Amersfoort' },
    { lat: 52.3702, lng: 4.8952, continent: 'Europe', pays: 'Pays-Bas', ville: 'Zaandam' },
    { lat: 52.1601, lng: 4.4908, continent: 'Europe', pays: 'Pays-Bas', ville: 'Leidschendam' },
    { lat: 52.2515, lng: 5.1678, continent: 'Europe', pays: 'Pays-Bas', ville: 'Hilversum' },
    { lat: 52.0907, lng: 5.1197, continent: 'Europe', pays: 'Pays-Bas', ville: 'Veenendaal' },
    { lat: 51.4344, lng: 5.4878, continent: 'Europe', pays: 'Pays-Bas', ville: 'Tilburg' },
    { lat: 52.0116, lng: 4.3585, continent: 'Europe', pays: 'Pays-Bas', ville: 'Leidschendam-Voorburg' },
    { lat: 52.1598, lng: 4.4934, continent: 'Europe', pays: 'Pays-Bas', ville: 'Leiderdorp' },
    { lat: 51.5643, lng: 5.0755, continent: 'Europe', pays: 'Pays-Bas', ville: 'Oosterhout' },
    { lat: 51.4408, lng: 4.3127, continent: 'Europe', pays: 'Pays-Bas', ville: 'Terneuzen' },
    { lat: 51.8126, lng: 4.6935, continent: 'Europe', pays: 'Pays-Bas', ville: 'Zwijndrecht' },
    { lat: 52.0026, lng: 4.3706, continent: 'Europe', pays: 'Pays-Bas', ville: 'Nieuwerkerk aan den IJssel' },
    { lat: 51.9833, lng: 4.3731, continent: 'Europe', pays: 'Pays-Bas', ville: 'Krimpen aan den IJssel' },
    { lat: 51.5700, lng: 5.0700, continent: 'Europe', pays: 'Pays-Bas', ville: 'Oss' },
    { lat: 52.0167, lng: 4.7100, continent: 'Europe', pays: 'Pays-Bas', ville: 'Berkel en Rodenrijs' },
    { lat: 51.6170, lng: 4.7733, continent: 'Europe', pays: 'Pays-Bas', ville: 'Etten-Leur' },
    { lat: 51.5983, lng: 5.2927, continent: 'Europe', pays: 'Pays-Bas', ville: 'Veghel' },
    { lat: 52.1617, lng: 5.3878, continent: 'Europe', pays: 'Pays-Bas', ville: 'Barneveld' },
    { lat: 51.9225, lng: 4.4792, continent: 'Europe', pays: 'Pays-Bas', ville: 'Capelle aan den IJssel' },
    { lat: 52.3097, lng: 4.7683, continent: 'Europe', pays: 'Pays-Bas', ville: 'Heemstede' },
    { lat: 51.4945, lng: 4.2875, continent: 'Europe', pays: 'Pays-Bas', ville: 'Goes' },
    { lat: 51.8251, lng: 5.8661, continent: 'Europe', pays: 'Pays-Bas', ville: 'Cuijk' },
    { lat: 52.1867, lng: 5.2344, continent: 'Europe', pays: 'Pays-Bas', ville: 'Naarden' },
    { lat: 51.4921, lng: 4.2913, continent: 'Europe', pays: 'Pays-Bas', ville: 'Middelburg' },
    { lat: 51.8206, lng: 4.6889, continent: 'Europe', pays: 'Pays-Bas', ville: 'Hellevoetsluis' },
    { lat: 52.1817, lng: 4.4433, continent: 'Europe', pays: 'Pays-Bas', ville: 'Noordwijk' },
    { lat: 51.8343, lng: 4.1370, continent: 'Europe', pays: 'Pays-Bas', ville: 'Brielle' },
    { lat: 52.0202, lng: 5.6646, continent: 'Europe', pays: 'Pays-Bas', ville: 'Rhenen' },
    { lat: 52.0689, lng: 5.0976, continent: 'Europe', pays: 'Pays-Bas', ville: 'Bunnik' },
    { lat: 51.6585, lng: 4.9076, continent: 'Europe', pays: 'Pays-Bas', ville: 'Rijen' },

    //Belgique
    { lat: 50.8503, lng: 4.3517, continent: 'Europe', pays: 'Belgique', ville: 'Bruxelles' },
    { lat: 51.2194, lng: 4.4025, continent: 'Europe', pays: 'Belgique', ville: 'Anvers' },
    { lat: 50.8500, lng: 4.3499, continent: 'Europe', pays: 'Belgique', ville: 'Louvain' },
    { lat: 50.8467, lng: 4.3517, continent: 'Europe', pays: 'Belgique', ville: 'Namur' },
    { lat: 50.8500, lng: 4.3500, continent: 'Europe', pays: 'Belgique', ville: 'Mons' },
    { lat: 50.8333, lng: 4.3667, continent: 'Europe', pays: 'Belgique', ville: 'Charleroi' },
    { lat: 51.2093, lng: 3.2247, continent: 'Europe', pays: 'Belgique', ville: 'Bruges' },
    { lat: 50.6337, lng: 5.5675, continent: 'Europe', pays: 'Belgique', ville: 'Liège' },
    { lat: 50.8192, lng: 3.2577, continent: 'Europe', pays: 'Belgique', ville: 'Courtrai' },
    { lat: 50.9739, lng: 4.5047, continent: 'Europe', pays: 'Belgique', ville: 'Malines' },
    { lat: 51.0539, lng: 3.7050, continent: 'Europe', pays: 'Belgique', ville: 'Gand' },
    { lat: 50.4536, lng: 3.9567, continent: 'Europe', pays: 'Belgique', ville: 'La Louvière' },
    { lat: 50.4114, lng: 4.4445, continent: 'Europe', pays: 'Belgique', ville: 'Charleroi' },
    { lat: 50.6796, lng: 4.6106, continent: 'Europe', pays: 'Belgique', ville: 'Wavre' },
    { lat: 50.8798, lng: 4.7005, continent: 'Europe', pays: 'Belgique', ville: 'Louvain' },
    { lat: 50.6403, lng: 5.5730, continent: 'Europe', pays: 'Belgique', ville: 'Seraing' },
    { lat: 51.2606, lng: 4.2176, continent: 'Europe', pays: 'Belgique', ville: 'Saint-Nicolas' },
    { lat: 50.4700, lng: 4.8710, continent: 'Europe', pays: 'Belgique', ville: 'Nivelles' },
    { lat: 50.8192, lng: 3.2699, continent: 'Europe', pays: 'Belgique', ville: 'Renaix' },
    { lat: 50.7254, lng: 4.6120, continent: 'Europe', pays: 'Belgique', ville: 'Genappe' },
    { lat: 50.9984, lng: 4.1320, continent: 'Europe', pays: 'Belgique', ville: 'Saint-Trond' },
    { lat: 50.8801, lng: 4.7009, continent: 'Europe', pays: 'Belgique', ville: 'Tervuren' },
    { lat: 50.6667, lng: 4.8000, continent: 'Europe', pays: 'Belgique', ville: 'Jodoigne' },
    { lat: 50.8280, lng: 3.2600, continent: 'Europe', pays: 'Belgique', ville: 'Zwevegem' },
    { lat: 50.8603, lng: 4.3488, continent: 'Europe', pays: 'Belgique', ville: 'Vilvorde' },
    { lat: 50.8034, lng: 4.4970, continent: 'Europe', pays: 'Belgique', ville: 'Forest' },
    { lat: 50.8968, lng: 4.6294, continent: 'Europe', pays: 'Belgique', ville: 'Zaventem' },
    { lat: 50.8213, lng: 3.2620, continent: 'Europe', pays: 'Belgique', ville: 'Harelbeke' },
    { lat: 50.8394, lng: 4.3498, continent: 'Europe', pays: 'Belgique', ville: 'Etterbeek' },
    { lat: 50.6167, lng: 5.5333, continent: 'Europe', pays: 'Belgique', ville: 'Ans' },
    { lat: 51.2246, lng: 4.3744, continent: 'Europe', pays: 'Belgique', ville: 'Boom' },
    { lat: 50.9206, lng: 4.4118, continent: 'Europe', pays: 'Belgique', ville: 'Vilvorde' },
    { lat: 50.8796, lng: 4.3435, continent: 'Europe', pays: 'Belgique', ville: 'Auderghem' },
    { lat: 50.4674, lng: 4.8718, continent: 'Europe', pays: 'Belgique', ville: 'Tubize' },
    { lat: 50.8192, lng: 3.2722, continent: 'Europe', pays: 'Belgique', ville: 'Mouscron' },
    { lat: 50.8070, lng: 3.3010, continent: 'Europe', pays: 'Belgique', ville: 'Waregem' },
    { lat: 50.8798, lng: 4.7010, continent: 'Europe', pays: 'Belgique', ville: 'Heverlee' },
    { lat: 50.6403, lng: 5.5668, continent: 'Europe', pays: 'Belgique', ville: 'Herstal' },
    { lat: 50.8192, lng: 3.2578, continent: 'Europe', pays: 'Belgique', ville: 'Menen' },
    { lat: 51.0543, lng: 3.7103, continent: 'Europe', pays: 'Belgique', ville: 'Lokeren' },
    { lat: 51.1500, lng: 4.2333, continent: 'Europe', pays: 'Belgique', ville: 'Aartselaar' },
    { lat: 50.4065, lng: 3.2725, continent: 'Europe', pays: 'Belgique', ville: 'Binche' },
    { lat: 50.4667, lng: 4.8672, continent: 'Europe', pays: 'Belgique', ville: 'Braine-le-Comte' },
    { lat: 51.1000, lng: 4.4500, continent: 'Europe', pays: 'Belgique', ville: 'Bornem' },
    { lat: 50.8229, lng: 4.3461, continent: 'Europe', pays: 'Belgique', ville: 'Watermael-Boitsfort' },
    { lat: 50.8880, lng: 4.7031, continent: 'Europe', pays: 'Belgique', ville: 'Herent' },
    { lat: 50.9286, lng: 5.3323, continent: 'Europe', pays: 'Belgique', ville: 'Borgloon' },
    { lat: 51.1039, lng: 3.9930, continent: 'Europe', pays: 'Belgique', ville: 'Evergem' },
    { lat: 50.8469, lng: 4.3496, continent: 'Europe', pays: 'Belgique', ville: 'Woluwe-Saint-Lambert' },
    { lat: 50.9090, lng: 4.3180, continent: 'Europe', pays: 'Belgique', ville: 'Grimbergen' },
    { lat: 50.8500, lng: 4.3488, continent: 'Europe', pays: 'Belgique', ville: 'Jette' },

    //Grande Bretagne
    { lat: 51.5074, lng: -0.1278, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Londres' },
    { lat: 52.4862, lng: -1.8904, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Birmingham' },
    { lat: 53.4808, lng: -2.2426, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Manchester' },
    { lat: 53.4084, lng: -2.9916, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Liverpool' },
    { lat: 51.4545, lng: -2.5879, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Bristol' },
    { lat: 53.8008, lng: -1.5491, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Leeds' },
    { lat: 51.3811, lng: -2.3590, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Bath' },
    { lat: 51.4816, lng: -3.1791, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Cardiff' },
    { lat: 50.8225, lng: -0.1372, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Brighton' },
    { lat: 52.9548, lng: -1.1581, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Nottingham' },
    { lat: 52.2053, lng: 0.1218, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Cambridge' },
    { lat: 51.7520, lng: -1.2577, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Oxford' },
    { lat: 51.4816, lng: -3.1791, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Swansea' },
    { lat: 51.4543, lng: -2.5879, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Newport' },
    { lat: 50.3755, lng: -4.1427, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Plymouth' },
    { lat: 51.0458, lng: -3.1491, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Taunton' },
    { lat: 50.7184, lng: -3.5339, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Exeter' },
    { lat: 50.3703, lng: -4.1427, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Torquay' },
    { lat: 51.4545, lng: -2.5879, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Weston-super-Mare' },
    { lat: 50.8249, lng: -0.1372, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Eastbourne' },
    { lat: 51.2704, lng: 1.0756, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Canterbury' },
    { lat: 51.1285, lng: 1.3111, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Folkestone' },
    { lat: 50.7856, lng: -1.0786, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Portsmouth' },
    { lat: 50.9097, lng: -1.4044, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Southampton' },
    { lat: 51.0165, lng: -1.3227, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Winchester' },
    { lat: 51.2108, lng: -1.4916, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Andover' },
    { lat: 50.8429, lng: -0.1313, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Worthing' },
    { lat: 51.4416, lng: -0.9406, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Reading' },
    { lat: 51.4543, lng: -0.9781, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Slough' },
    { lat: 51.3721, lng: -0.3683, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Woking' },
    { lat: 51.2372, lng: -0.2056, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Guildford' },
    { lat: 51.3947, lng: -0.1693, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Kingston upon Thames' },
    { lat: 51.5074, lng: -0.1278, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Ealing' },
    { lat: 51.5085, lng: -0.1257, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Barnet' },
    { lat: 51.6132, lng: -0.0878, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Haringey' },
    { lat: 51.5636, lng: -0.1098, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Hampstead' },
    { lat: 51.5590, lng: -0.2000, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Wembley' },
    { lat: 51.5761, lng: -0.2341, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Harrow' },
    { lat: 51.4958, lng: -0.2611, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Hammersmith' },
    { lat: 51.5155, lng: -0.1787, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Kensington' },
    { lat: 51.5471, lng: -0.2082, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Brent' },
    { lat: 51.5555, lng: -0.1747, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Camden Town' },
    { lat: 51.4882, lng: -0.1248, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Westminster' },
    { lat: 51.4160, lng: -0.2082, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Croydon' },
    { lat: 51.4833, lng: -0.3000, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Hounslow' },
    { lat: 51.5363, lng: -0.1027, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Hackney' },
    { lat: 51.5496, lng: -0.0550, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Tottenham' },
    { lat: 51.5145, lng: -0.0324, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Stratford' },
    { lat: 51.4865, lng: -0.1036, continent: 'Europe', pays: 'Grande-Bretagne', ville: 'Southwark' },

    //Ecosse
    { lat: 55.9533, lng: -3.1883, continent: 'Europe', pays: 'Écosse', ville: 'Édimbourg' },
    { lat: 55.8642, lng: -4.2518, continent: 'Europe', pays: 'Écosse', ville: 'Glasgow' },
    { lat: 57.1497, lng: -2.0943, continent: 'Europe', pays: 'Écosse', ville: 'Aberdeen' },
    { lat: 56.3960, lng: -3.4230, continent: 'Europe', pays: 'Écosse', ville: 'Perth' },
    { lat: 55.9432, lng: -3.2273, continent: 'Europe', pays: 'Écosse', ville: 'Falkirk' },
    { lat: 56.4620, lng: -2.9707, continent: 'Europe', pays: 'Écosse', ville: 'Dundee' },
    { lat: 56.1165, lng: -3.9369, continent: 'Europe', pays: 'Écosse', ville: 'Stirling' },
    { lat: 57.4791, lng: -4.2234, continent: 'Europe', pays: 'Écosse', ville: 'Inverness' },
    { lat: 55.9517, lng: -4.5798, continent: 'Europe', pays: 'Écosse', ville: 'Paisley' },
    { lat: 55.8900, lng: -4.3008, continent: 'Europe', pays: 'Écosse', ville: 'East Kilbride' },
    { lat: 56.1956, lng: -3.1746, continent: 'Europe', pays: 'Écosse', ville: 'Dunfermline' },
    { lat: 56.1170, lng: -3.9369, continent: 'Europe', pays: 'Écosse', ville: 'Alloa' },
    { lat: 56.2000, lng: -3.0000, continent: 'Europe', pays: 'Écosse', ville: 'Kirkcaldy' },
    { lat: 55.6081, lng: -4.5002, continent: 'Europe', pays: 'Écosse', ville: 'Ayr' },
    { lat: 56.5000, lng: -3.5833, continent: 'Europe', pays: 'Écosse', ville: 'Blairgowrie' },
    { lat: 55.8456, lng: -4.2971, continent: 'Europe', pays: 'Écosse', ville: 'Cumbernauld' },
    { lat: 55.8609, lng: -4.2540, continent: 'Europe', pays: 'Écosse', ville: 'Hamilton' },
    { lat: 56.1833, lng: -3.0000, continent: 'Europe', pays: 'Écosse', ville: 'Glenrothes' },
    { lat: 55.6761, lng: -4.7193, continent: 'Europe', pays: 'Écosse', ville: 'Irvine' },
    { lat: 56.2833, lng: -3.3333, continent: 'Europe', pays: 'Écosse', ville: 'Crieff' },
    { lat: 57.3320, lng: -6.2710, continent: 'Europe', pays: 'Écosse', ville: 'Portree' },
    { lat: 55.8467, lng: -4.2170, continent: 'Europe', pays: 'Écosse', ville: 'Motherwell' },
    { lat: 55.8456, lng: -4.0323, continent: 'Europe', pays: 'Écosse', ville: 'Coatbridge' },
    { lat: 55.8500, lng: -4.0333, continent: 'Europe', pays: 'Écosse', ville: 'Airdrie' },
    { lat: 56.2500, lng: -4.2167, continent: 'Europe', pays: 'Écosse', ville: 'Callander' },
    { lat: 55.9000, lng: -4.4000, continent: 'Europe', pays: 'Écosse', ville: 'Dumbarton' },
    { lat: 55.9167, lng: -4.5000, continent: 'Europe', pays: 'Écosse', ville: 'Greenock' },
    { lat: 55.9500, lng: -3.2000, continent: 'Europe', pays: 'Écosse', ville: 'Linlithgow' },
    { lat: 55.8680, lng: -4.2838, continent: 'Europe', pays: 'Écosse', ville: 'Kilmarnock' },
    { lat: 56.0833, lng: -3.9833, continent: 'Europe', pays: 'Écosse', ville: 'Grangemouth' },
    { lat: 55.8667, lng: -4.6167, continent: 'Europe', pays: 'Écosse', ville: 'Helensburgh' },
    { lat: 55.6100, lng: -4.5000, continent: 'Europe', pays: 'Écosse', ville: 'Prestwick' },
    { lat: 55.4167, lng: -4.6333, continent: 'Europe', pays: 'Écosse', ville: 'Troon' },
    { lat: 55.9500, lng: -3.2000, continent: 'Europe', pays: 'Écosse', ville: 'Livingston' },
    { lat: 55.7444, lng: -4.2122, continent: 'Europe', pays: 'Écosse', ville: 'Wishaw' },
    { lat: 56.0000, lng: -3.8000, continent: 'Europe', pays: 'Écosse', ville: 'Boness' },
    { lat: 56.4500, lng: -2.9667, continent: 'Europe', pays: 'Écosse', ville: 'Carnoustie' },
    { lat: 56.8000, lng: -5.1000, continent: 'Europe', pays: 'Écosse', ville: 'Fort William' },
    { lat: 55.6667, lng: -4.6500, continent: 'Europe', pays: 'Écosse', ville: 'Largs' },
    { lat: 55.9558, lng: -3.1625, continent: 'Europe', pays: 'Écosse', ville: 'Leith' },
    { lat: 55.9167, lng: -4.2167, continent: 'Europe', pays: 'Écosse', ville: 'Renfrew' },
    { lat: 56.2167, lng: -3.1667, continent: 'Europe', pays: 'Écosse', ville: 'Cupar' },
    { lat: 56.5000, lng: -4.2000, continent: 'Europe', pays: 'Écosse', ville: 'Killin' },
    { lat: 55.4333, lng: -4.6333, continent: 'Europe', pays: 'Écosse', ville: 'Saltcoats' },
    { lat: 56.1000, lng: -3.5000, continent: 'Europe', pays: 'Écosse', ville: 'Kinross' },
    { lat: 55.6833, lng: -4.6833, continent: 'Europe', pays: 'Écosse', ville: 'Millport' },
    { lat: 57.4000, lng: -6.1500, continent: 'Europe', pays: 'Écosse', ville: 'Broadford' },
    { lat: 56.8500, lng: -4.2500, continent: 'Europe', pays: 'Écosse', ville: 'Spean Bridge' },
    { lat: 55.8333, lng: -4.3667, continent: 'Europe', pays: 'Écosse', ville: 'Bishopbriggs' },

    //Norvège
    { lat: 59.9127, lng: 10.7461, continent: 'Europe', pays: 'Norvège', ville: 'Oslo' },
    { lat: 58.9699, lng: 5.7331, continent: 'Europe', pays: 'Norvège', ville: 'Stavanger' },
    { lat: 60.3913, lng: 5.3221, continent: 'Europe', pays: 'Norvège', ville: 'Bergen' },
    { lat: 63.4305, lng: 10.3951, continent: 'Europe', pays: 'Norvège', ville: 'Trondheim' },
    { lat: 59.9127, lng: 10.7461, continent: 'Europe', pays: 'Norvège', ville: 'Grunerløkka' },
    { lat: 59.9139, lng: 10.7522, continent: 'Europe', pays: 'Norvège', ville: 'Sentrum' },
    { lat: 62.4722, lng: 6.1495, continent: 'Europe', pays: 'Norvège', ville: 'Ålesund' },
    { lat: 59.9107, lng: 10.7522, continent: 'Europe', pays: 'Norvège', ville: 'Grünerløkka' },
    { lat: 61.1241, lng: 10.4631, continent: 'Europe', pays: 'Norvège', ville: 'Lillehammer' },
    { lat: 58.9699, lng: 5.7331, continent: 'Europe', pays: 'Norvège', ville: 'Våland' },
    { lat: 59.9139, lng: 10.7522, continent: 'Europe', pays: 'Norvège', ville: 'Aker Brygge' },
    { lat: 60.7945, lng: 11.0680, continent: 'Europe', pays: 'Norvège', ville: 'Gjøvik' },
    { lat: 59.9167, lng: 10.7500, continent: 'Europe', pays: 'Norvège', ville: 'St. Hanshaugen' },
    { lat: 63.4305, lng: 10.3951, continent: 'Europe', pays: 'Norvège', ville: 'Byåsen' },
    { lat: 59.9111, lng: 10.7447, continent: 'Europe', pays: 'Norvège', ville: 'Majorstuen' },
    { lat: 59.9144, lng: 10.7569, continent: 'Europe', pays: 'Norvège', ville: 'Tjuvholmen' },
    { lat: 60.6350, lng: 6.3548, continent: 'Europe', pays: 'Norvège', ville: 'Voss' },
    { lat: 60.7996, lng: 11.0670, continent: 'Europe', pays: 'Norvège', ville: 'Raufoss' },
    { lat: 59.9113, lng: 10.7602, continent: 'Europe', pays: 'Norvège', ville: 'Skillebekk' },
    { lat: 59.9116, lng: 10.7526, continent: 'Europe', pays: 'Norvège', ville: 'Frogner' },

    //Suède
    { lat: 59.3293, lng: 18.0686, continent: 'Europe', pays: 'Suède', ville: 'Stockholm' },
    { lat: 57.7089, lng: 11.9746, continent: 'Europe', pays: 'Suède', ville: 'Gothenburg' },
    { lat: 55.6047, lng: 13.0036, continent: 'Europe', pays: 'Suède', ville: 'Malmö' },
    { lat: 59.3346, lng: 18.0637, continent: 'Europe', pays: 'Suède', ville: 'Södermalm' },
    { lat: 59.3293, lng: 18.0686, continent: 'Europe', pays: 'Suède', ville: 'Gamla Stan' },
    { lat: 59.8586, lng: 17.6389, continent: 'Europe', pays: 'Suède', ville: 'Uppsala' },
    { lat: 57.7069, lng: 11.9706, continent: 'Europe', pays: 'Suède', ville: 'Hisingen' },
    { lat: 58.4108, lng: 15.6213, continent: 'Europe', pays: 'Suède', ville: 'Linköping' },
    { lat: 57.7072, lng: 11.9668, continent: 'Europe', pays: 'Suède', ville: 'Örgryte' },
    { lat: 57.6386, lng: 18.2960, continent: 'Europe', pays: 'Suède', ville: 'Visby' },
    { lat: 57.7077, lng: 11.9653, continent: 'Europe', pays: 'Suède', ville: 'Majorna' },
    { lat: 57.7679, lng: 14.1620, continent: 'Europe', pays: 'Suède', ville: 'Jönköping' },
    { lat: 58.5877, lng: 16.1921, continent: 'Europe', pays: 'Suède', ville: 'Norrköping' },
    { lat: 55.7146, lng: 13.2084, continent: 'Europe', pays: 'Suède', ville: 'Lund' },
    { lat: 59.3502, lng: 18.1030, continent: 'Europe', pays: 'Suède', ville: 'Solna' },
    { lat: 57.7676, lng: 12.8465, continent: 'Europe', pays: 'Suède', ville: 'Borås' },
    { lat: 59.3293, lng: 18.0686, continent: 'Europe', pays: 'Suède', ville: 'Kungsholmen' },
    { lat: 55.6050, lng: 13.0038, continent: 'Europe', pays: 'Suède', ville: 'Västra Hamnen' },
    { lat: 59.9000, lng: 10.7170, continent: 'Europe', pays: 'Suède', ville: 'Oslo' },
    { lat: 55.6033, lng: 13.0028, continent: 'Europe', pays: 'Suède', ville: 'Limhamn' },

    //Irlande
    { lat: 53.3498, lng: -6.2603, continent: 'Europe', pays: 'Irlande', ville: 'Dublin' },
    { lat: 51.8985, lng: -8.4756, continent: 'Europe', pays: 'Irlande', ville: 'Cork' },
    { lat: 53.2707, lng: -9.0568, continent: 'Europe', pays: 'Irlande', ville: 'Galway' },
    { lat: 52.6638, lng: -8.6267, continent: 'Europe', pays: 'Irlande', ville: 'Limerick' },
    { lat: 52.3360, lng: -7.2689, continent: 'Europe', pays: 'Irlande', ville: 'Waterford' },
    { lat: 54.2766, lng: -8.4761, continent: 'Europe', pays: 'Irlande', ville: 'Sligo' },
    { lat: 53.1424, lng: -7.6921, continent: 'Europe', pays: 'Irlande', ville: 'Tullamore' },
    { lat: 54.6833, lng: -8.1000, continent: 'Europe', pays: 'Irlande', ville: 'Donegal' },
    { lat: 53.3048, lng: -6.2143, continent: 'Europe', pays: 'Irlande', ville: 'Malahide' },
    { lat: 53.3617, lng: -6.4861, continent: 'Europe', pays: 'Irlande', ville: 'Swords' },
    { lat: 52.1326, lng: -10.2724, continent: 'Europe', pays: 'Irlande', ville: 'Tralee' },
    { lat: 53.2734, lng: -9.0514, continent: 'Europe', pays: 'Irlande', ville: 'Oranmore' },
    { lat: 53.7179, lng: -6.3569, continent: 'Europe', pays: 'Irlande', ville: 'Trim' },
    { lat: 53.8008, lng: -7.7890, continent: 'Europe', pays: 'Irlande', ville: 'Longford' },
    { lat: 53.1424, lng: -7.6921, continent: 'Europe', pays: 'Irlande', ville: 'Clara' },
    { lat: 53.2048, lng: -6.1095, continent: 'Europe', pays: 'Irlande', ville: 'Greystones' },
    { lat: 53.3753, lng: -6.3078, continent: 'Europe', pays: 'Irlande', ville: 'Leixlip' },
    { lat: 52.6692, lng: -8.6235, continent: 'Europe', pays: 'Irlande', ville: 'Newcastle West' },
    { lat: 53.1424, lng: -7.6921, continent: 'Europe', pays: 'Irlande', ville: 'Edenderry' },
    { lat: 52.6783, lng: -8.5879, continent: 'Europe', pays: 'Irlande', ville: 'Rathkeale' },

    //Tchèque
    { lat: 50.0880, lng: 14.4208, continent: 'Europe', pays: 'République tchèque', ville: 'Prague' },
    { lat: 49.1951, lng: 16.6068, continent: 'Europe', pays: 'République tchèque', ville: 'Brno' },
    { lat: 49.7391, lng: 13.3776, continent: 'Europe', pays: 'République tchèque', ville: 'Plzeň' },
    { lat: 50.0865, lng: 14.4191, continent: 'Europe', pays: 'République tchèque', ville: 'Staré Město' },
    { lat: 50.0880, lng: 14.4208, continent: 'Europe', pays: 'République tchèque', ville: 'Hradčany' },
    { lat: 49.8303, lng: 18.2820, continent: 'Europe', pays: 'République tchèque', ville: 'Ostrava' },
    { lat: 49.8407, lng: 18.2884, continent: 'Europe', pays: 'République tchèque', ville: 'Slezská Ostrava' },
    { lat: 49.5938, lng: 17.2504, continent: 'Europe', pays: 'République tchèque', ville: 'Olomouc' },
    { lat: 49.4396, lng: 17.4606, continent: 'Europe', pays: 'République tchèque', ville: 'Prostějov' },
    { lat: 50.0826, lng: 14.4126, continent: 'Europe', pays: 'République tchèque', ville: 'Josefov' },
    { lat: 49.3034, lng: 17.3926, continent: 'Europe', pays: 'République tchèque', ville: 'Hranice' },
    { lat: 49.2236, lng: 17.6635, continent: 'Europe', pays: 'République tchèque', ville: 'Nový Jičín' },
    { lat: 49.7563, lng: 18.6180, continent: 'Europe', pays: 'République tchèque', ville: 'Frýdek-Místek' },
    { lat: 49.8181, lng: 15.8668, continent: 'Europe', pays: 'République tchèque', ville: 'Pardubice' },
    { lat: 49.5938, lng: 17.2504, continent: 'Europe', pays: 'République tchèque', ville: 'Svratka' },
    { lat: 50.6610, lng: 14.0429, continent: 'Europe', pays: 'République tchèque', ville: 'Česká Lípa' },
    { lat: 49.7246, lng: 13.3540, continent: 'Europe', pays: 'République tchèque', ville: 'Tachov' },
    { lat: 50.0414, lng: 15.7683, continent: 'Europe', pays: 'République tchèque', ville: 'Hradec Králové' },
    { lat: 49.1834, lng: 16.6054, continent: 'Europe', pays: 'République tchèque', ville: 'Slatinice' },
    { lat: 49.1951, lng: 16.6068, continent: 'Europe', pays: 'République tchèque', ville: 'Žabovřesky' },

    //Pologne
    { lat: 52.2298, lng: 21.0118, continent: 'Europe', pays: 'Pologne', ville: 'Varsovie' },
    { lat: 51.1079, lng: 17.0385, continent: 'Europe', pays: 'Pologne', ville: 'Wrocław' },
    { lat: 50.0647, lng: 19.9450, continent: 'Europe', pays: 'Pologne', ville: 'Cracovie' },
    { lat: 53.4285, lng: 14.5528, continent: 'Europe', pays: 'Pologne', ville: 'Szczecin' },
    { lat: 52.4064, lng: 16.9252, continent: 'Europe', pays: 'Pologne', ville: 'Poznań' },
    { lat: 50.2914, lng: 18.6770, continent: 'Europe', pays: 'Pologne', ville: 'Katowice' },
    { lat: 50.2584, lng: 19.0275, continent: 'Europe', pays: 'Pologne', ville: 'Sosnowiec' },
    { lat: 53.7784, lng: 20.4801, continent: 'Europe', pays: 'Pologne', ville: 'Olsztyn' },
    { lat: 54.3520, lng: 18.6466, continent: 'Europe', pays: 'Pologne', ville: 'Gdańsk' },
    { lat: 50.7158, lng: 23.2501, continent: 'Europe', pays: 'Pologne', ville: 'Lublin' },
    { lat: 51.9356, lng: 15.5064, continent: 'Europe', pays: 'Pologne', ville: 'Łódź' },
    { lat: 53.1325, lng: 23.1688, continent: 'Europe', pays: 'Pologne', ville: 'Białystok' },
    { lat: 52.2331, lng: 21.0174, continent: 'Europe', pays: 'Pologne', ville: 'Praga' },
    { lat: 50.2819, lng: 18.9802, continent: 'Europe', pays: 'Pologne', ville: 'Gliwice' },
    { lat: 53.7735, lng: 20.4770, continent: 'Europe', pays: 'Pologne', ville: 'Lidzbark Warmiński' },
    { lat: 50.0647, lng: 19.9450, continent: 'Europe', pays: 'Pologne', ville: 'Kazimierz' },
    { lat: 52.4064, lng: 16.9252, continent: 'Europe', pays: 'Pologne', ville: 'Lubon' },
    { lat: 50.2914, lng: 18.6770, continent: 'Europe', pays: 'Pologne', ville: 'Gliwice' },
    { lat: 50.2584, lng: 19.0275, continent: 'Europe', pays: 'Pologne', ville: 'Katowice' },
    { lat: 53.4285, lng: 14.5528, continent: 'Europe', pays: 'Pologne', ville: 'Szczecin' },

    //Danemark
    { lat: 55.6761, lng: 12.5683, continent: 'Europe', pays: 'Danemark', ville: 'Copenhague' },
    { lat: 56.1629, lng: 10.2039, continent: 'Europe', pays: 'Danemark', ville: 'Aarhus' },
    { lat: 55.3969, lng: 10.3908, continent: 'Europe', pays: 'Danemark', ville: 'Odense' },
    { lat: 56.4816, lng: 9.0500, continent: 'Europe', pays: 'Danemark', ville: 'Aalborg' },
    { lat: 55.7090, lng: 9.5369, continent: 'Europe', pays: 'Danemark', ville: 'Vejle' },
    { lat: 57.0488, lng: 9.9217, continent: 'Europe', pays: 'Danemark', ville: 'Hjørring' },
    { lat: 56.1697, lng: 9.5451, continent: 'Europe', pays: 'Danemark', ville: 'Randers' },
    { lat: 56.1572, lng: 10.2107, continent: 'Europe', pays: 'Danemark', ville: 'Horsens' },
    { lat: 55.3946, lng: 10.3833, continent: 'Europe', pays: 'Danemark', ville: 'Middelfart' },
    { lat: 56.1391, lng: 8.9739, continent: 'Europe', pays: 'Danemark', ville: 'Silkeborg' },
    { lat: 56.1143, lng: 9.5689, continent: 'Europe', pays: 'Danemark', ville: 'Skanderborg' },
    { lat: 55.6254, lng: 12.5913, continent: 'Europe', pays: 'Danemark', ville: 'Lyngby' },
    { lat: 57.7210, lng: 10.5918, continent: 'Europe', pays: 'Danemark', ville: 'Frederikshavn' },
    { lat: 55.6576, lng: 12.6155, continent: 'Europe', pays: 'Danemark', ville: 'Køge' },
    { lat: 56.2375, lng: 9.8570, continent: 'Europe', pays: 'Danemark', ville: 'Viborg' },
    { lat: 56.0473, lng: 9.9186, continent: 'Europe', pays: 'Danemark', ville: 'Herning' },
    { lat: 55.4756, lng: 8.4494, continent: 'Europe', pays: 'Danemark', ville: 'Esbjerg' },
    { lat: 55.8721, lng: 9.8640, continent: 'Europe', pays: 'Danemark', ville: 'Horsens' },
    { lat: 55.7148, lng: 12.5696, continent: 'Europe', pays: 'Danemark', ville: 'Helsingør' },
    { lat: 56.2020, lng: 10.2223, continent: 'Europe', pays: 'Danemark', ville: 'Skive' },

    { lat: 44.4268, lng: 26.1025, continent: 'Europe', pays: 'Roumanie', ville: 'Bucarest' },
    { lat: 45.7489, lng: 21.2087, continent: 'Europe', pays: 'Roumanie', ville: 'Timișoara' },
    { lat: 47.1569, lng: 27.5903, continent: 'Europe', pays: 'Roumanie', ville: 'Iași' },
    { lat: 45.6559, lng: 25.6100, continent: 'Europe', pays: 'Roumanie', ville: 'Brașov' },
    { lat: 47.1656, lng: 27.5838, continent: 'Europe', pays: 'Roumanie', ville: 'Pașcani' },
    { lat: 44.4328, lng: 26.1040, continent: 'Europe', pays: 'Roumanie', ville: 'Sector 1' },
    { lat: 45.7489, lng: 21.2087, continent: 'Europe', pays: 'Roumanie', ville: 'Sector 6' },
    { lat: 47.1445, lng: 24.5136, continent: 'Europe', pays: 'Roumanie', ville: 'Maramureş' },
    { lat: 45.7513, lng: 21.2257, continent: 'Europe', pays: 'Roumanie', ville: 'Socodor' },
    { lat: 44.4314, lng: 26.0905, continent: 'Europe', pays: 'Roumanie', ville: 'Bârlad' },
    { lat: 45.7607, lng: 21.2285, continent: 'Europe', pays: 'Roumanie', ville: 'Reșița' },
    { lat: 47.0512, lng: 21.9189, continent: 'Europe', pays: 'Roumanie', ville: 'Satu Mare' },
    { lat: 45.6587, lng: 25.5969, continent: 'Europe', pays: 'Roumanie', ville: 'Sibiu' },
    { lat: 44.4287, lng: 26.1277, continent: 'Europe', pays: 'Roumanie', ville: 'Văcăreşti' },
    { lat: 47.1291, lng: 23.5786, continent: 'Europe', pays: 'Roumanie', ville: 'Oradea' },
    { lat: 45.6454, lng: 25.5897, continent: 'Europe', pays: 'Roumanie', ville: 'Piteşti' },
    { lat: 45.7520, lng: 21.2254, continent: 'Europe', pays: 'Roumanie', ville: 'Lugoj' },
    { lat: 44.4210, lng: 26.1320, continent: 'Europe', pays: 'Roumanie', ville: 'Văcăreşti' },
    { lat: 47.1679, lng: 27.5805, continent: 'Europe', pays: 'Roumanie', ville: 'Buhusi' },
    { lat: 45.7406, lng: 21.2227, continent: 'Europe', pays: 'Roumanie', ville: 'Mehadia' },
    { lat: 47.4980, lng: 19.0399, continent: 'Europe', pays: 'Hongrie', ville: 'Budapest' },
    { lat: 47.6875, lng: 17.6344, continent: 'Europe', pays: 'Hongrie', ville: 'Győr' },
    { lat: 46.2530, lng: 20.1414, continent: 'Europe', pays: 'Hongrie', ville: 'Szeged' },
    { lat: 47.6811, lng: 17.6427, continent: 'Europe', pays: 'Hongrie', ville: 'Szentendre' },
    { lat: 47.1954, lng: 18.4070, continent: 'Europe', pays: 'Hongrie', ville: 'Dunaújváros' },
    { lat: 47.9258, lng: 19.7081, continent: 'Europe', pays: 'Hongrie', ville: 'Esztergom' },
    { lat: 46.0782, lng: 18.2323, continent: 'Europe', pays: 'Hongrie', ville: 'Pécs' },
    { lat: 47.0958, lng: 17.9177, continent: 'Europe', pays: 'Hongrie', ville: 'Veszprém' },
    { lat: 47.6875, lng: 17.6344, continent: 'Europe', pays: 'Hongrie', ville: 'Gyor' },
    { lat: 46.2530, lng: 20.1414, continent: 'Europe', pays: 'Hongrie', ville: 'Békéscsaba' },
    { lat: 47.6811, lng: 17.6427, continent: 'Europe', pays: 'Hongrie', ville: 'Paks' },
    { lat: 47.1954, lng: 18.4070, continent: 'Europe', pays: 'Hongrie', ville: 'Várpalota' },
    { lat: 47.9258, lng: 19.7081, continent: 'Europe', pays: 'Hongrie', ville: 'Monor' },
    { lat: 46.0782, lng: 18.2323, continent: 'Europe', pays: 'Hongrie', ville: 'Barcs' },
    { lat: 47.0958, lng: 17.9177, continent: 'Europe', pays: 'Hongrie', ville: 'Nagyatád' },
    { lat: 47.9258, lng: 19.7081, continent: 'Europe', pays: 'Hongrie', ville: 'Vác' },
    { lat: 46.0782, lng: 18.2323, continent: 'Europe', pays: 'Hongrie', ville: 'Mohács' },
    { lat: 47.0958, lng: 17.9177, continent: 'Europe', pays: 'Hongrie', ville: 'Várpalota' },
    { lat: 47.9258, lng: 19.7081, continent: 'Europe', pays: 'Hongrie', ville: 'Pécel' },
    { lat: 46.0782, lng: 18.2323, continent: 'Europe', pays: 'Hongrie', ville: 'Pápa' },
    { lat: 48.1482, lng: 17.1067, continent: 'Europe', pays: 'Slovaquie', ville: 'Bratislava' },
    { lat: 48.3018, lng: 18.0880, continent: 'Europe', pays: 'Slovaquie', ville: 'Nitra' },
    { lat: 48.6690, lng: 19.6990, continent: 'Europe', pays: 'Slovaquie', ville: 'Banská Bystrica' },
    { lat: 48.6208, lng: 19.5213, continent: 'Europe', pays: 'Slovaquie', ville: 'Žilina' },
    { lat: 48.7758, lng: 21.9279, continent: 'Europe', pays: 'Slovaquie', ville: 'Košice' },
    { lat: 48.5800, lng: 17.2833, continent: 'Europe', pays: 'Slovaquie', ville: 'Trnava' },
    { lat: 48.6738, lng: 19.6966, continent: 'Europe', pays: 'Slovaquie', ville: 'Banská Bystrica' },
    { lat: 48.6208, lng: 19.5213, continent: 'Europe', pays: 'Slovaquie', ville: 'Žilina' },
    { lat: 48.7758, lng: 21.9279, continent: 'Europe', pays: 'Slovaquie', ville: 'Rimavská Sobota' },
    { lat: 48.5800, lng: 17.2833, continent: 'Europe', pays: 'Slovaquie', ville: 'Nové Mesto nad Váhom' },
    { lat: 48.6738, lng: 19.6966, continent: 'Europe', pays: 'Slovaquie', ville: 'Prievidza' },
    { lat: 48.6208, lng: 19.5213, continent: 'Europe', pays: 'Slovaquie', ville: 'Martin' },
    { lat: 48.7758, lng: 21.9279, continent: 'Europe', pays: 'Slovaquie', ville: 'Michalovce' },
    { lat: 48.5800, lng: 17.2833, continent: 'Europe', pays: 'Slovaquie', ville: 'Pezinok' },
    { lat: 48.6738, lng: 19.6966, continent: 'Europe', pays: 'Slovaquie', ville: 'Liptovský Mikuláš' },
    { lat: 48.6208, lng: 19.5213, continent: 'Europe', pays: 'Slovaquie', ville: 'Trenčín' },
    { lat: 48.7758, lng: 21.9279, continent: 'Europe', pays: 'Slovaquie', ville: 'Prešov' },
    { lat: 48.5800, lng: 17.2833, continent: 'Europe', pays: 'Slovaquie', ville: 'Galanta' },
    { lat: 48.6738, lng: 19.6966, continent: 'Europe', pays: 'Slovaquie', ville: 'Levice' },
    { lat: 48.6208, lng: 19.5213, continent: 'Europe', pays: 'Slovaquie', ville: 'Považská Bystrica' },
    { lat: 41.9981, lng: 21.4254, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Skopje' },
    { lat: 41.4393, lng: 22.6458, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Bitola' },
    { lat: 41.6401, lng: 21.7453, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Kumanovo' },
    { lat: 41.9237, lng: 21.5662, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Prilep' },
    { lat: 41.9965, lng: 21.4314, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Čair' },
    { lat: 42.1083, lng: 21.3389, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Štip' },
    { lat: 41.6162, lng: 21.6369, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Tetovo' },
    { lat: 41.9933, lng: 21.4316, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Butel' },
    { lat: 41.1086, lng: 20.8027, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Gostivar' },
    { lat: 41.4425, lng: 22.6072, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Veles' },
    { lat: 41.6458, lng: 21.7453, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Kisela Voda' },
    { lat: 41.9265, lng: 21.5656, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Centar Župa' },
    { lat: 41.9981, lng: 21.4254, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Suto Orizari' },
    { lat: 41.4393, lng: 22.6458, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Ilinden' },
    { lat: 41.6401, lng: 21.7453, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Kavadartsi' },
    { lat: 41.9237, lng: 21.5662, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Debar' },
    { lat: 41.9965, lng: 21.4314, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Gjorce Petrov' },
    { lat: 42.1083, lng: 21.3389, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Negotino' },
    { lat: 41.6162, lng: 21.6369, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Strumica' },
    { lat: 41.9933, lng: 21.4316, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Vrapčište' },
    { lat: 37.9838, lng: 23.7275, continent: 'Europe', pays: 'Grèce', ville: 'Athènes' },
    { lat: 40.6401, lng: 22.9444, continent: 'Europe', pays: 'Grèce', ville: 'Thessalonique' },
    { lat: 35.3387, lng: 25.1442, continent: 'Europe', pays: 'Grèce', ville: 'Héraklion' },
    { lat: 38.2466, lng: 21.7346, continent: 'Europe', pays: 'Grèce', ville: 'Patras' },
    { lat: 39.3650, lng: 22.9401, continent: 'Europe', pays: 'Grèce', ville: 'Larissa' },
    { lat: 39.6167, lng: 19.9167, continent: 'Europe', pays: 'Grèce', ville: 'Corfou' },
    { lat: 38.2305, lng: 21.7539, continent: 'Europe', pays: 'Grèce', ville: 'Agrinio' },
    { lat: 37.7510, lng: 20.6336, continent: 'Europe', pays: 'Grèce', ville: 'Zákynthos' },
    { lat: 35.5134, lng: 24.0180, continent: 'Europe', pays: 'Grèce', ville: 'Réthymnon' },
    { lat: 39.0572, lng: 26.5783, continent: 'Europe', pays: 'Grèce', ville: 'Mytilène' },
    { lat: 40.9798, lng: 24.4990, continent: 'Europe', pays: 'Grèce', ville: 'Komotini' },
    { lat: 35.3247, lng: 25.1442, continent: 'Europe', pays: 'Grèce', ville: 'Agios Nikolaos' },
    { lat: 38.2305, lng: 21.7539, continent: 'Europe', pays: 'Grèce', ville: 'Messolonghi' },
    { lat: 37.0755, lng: 22.4307, continent: 'Europe', pays: 'Grèce', ville: 'Argos' },
    { lat: 39.3650, lng: 22.9401, continent: 'Europe', pays: 'Grèce', ville: 'Volos' },
    { lat: 39.6167, lng: 19.9167, continent: 'Europe', pays: 'Grèce', ville: 'Kavos' },
    { lat: 38.2305, lng: 21.7539, continent: 'Europe', pays: 'Grèce', ville: 'Mesolongi' },
    { lat: 37.7510, lng: 20.6336, continent: 'Europe', pays: 'Grèce', ville: 'Zante' },
    { lat: 35.3247, lng: 25.1442, continent: 'Europe', pays: 'Grèce', ville: 'Agios Nikolaos' },
    { lat: 38.2305, lng: 21.7539, continent: 'Europe', pays: 'Grèce', ville: 'Sotiros' },
    { lat: 54.6892, lng: 25.2798, continent: 'Europe', pays: 'Lituanie', ville: 'Vilnius' },
    { lat: 55.4978, lng: 22.1745, continent: 'Europe', pays: 'Lituanie', ville: 'Kaunas' },
    { lat: 55.7123, lng: 21.1356, continent: 'Europe', pays: 'Lituanie', ville: 'Klaipėda' },
    { lat: 54.9170, lng: 23.9595, continent: 'Europe', pays: 'Lituanie', ville: 'Šiauliai' },
    { lat: 55.2471, lng: 24.7636, continent: 'Europe', pays: 'Lituanie', ville: 'Panevėžys' },
    { lat: 54.3269, lng: 21.0590, continent: 'Europe', pays: 'Lituanie', ville: 'Alytus' },
    { lat: 54.6430, lng: 25.2904, continent: 'Europe', pays: 'Lituanie', ville: 'Elektrėnai' },
    { lat: 54.0161, lng: 23.6476, continent: 'Europe', pays: 'Lituanie', ville: 'Marijampolė' },
    { lat: 55.7160, lng: 24.3550, continent: 'Europe', pays: 'Lituanie', ville: 'Jonava' },
    { lat: 54.1461, lng: 23.9760, continent: 'Europe', pays: 'Lituanie', ville: 'Utena' },
    { lat: 54.9027, lng: 23.9114, continent: 'Europe', pays: 'Lituanie', ville: 'Tauragė' },
    { lat: 55.7304, lng: 21.1446, continent: 'Europe', pays: 'Lituanie', ville: 'Palanga' },
    { lat: 55.3238, lng: 21.4834, continent: 'Europe', pays: 'Lituanie', ville: 'Kretinga' },
    { lat: 54.2336, lng: 23.5409, continent: 'Europe', pays: 'Lituanie', ville: 'Mazeikiai' },
    { lat: 55.0715, lng: 24.2700, continent: 'Europe', pays: 'Lituanie', ville: 'Radviliskis' },
    { lat: 54.0823, lng: 24.3489, continent: 'Europe', pays: 'Lituanie', ville: 'Šilutė' },
    { lat: 55.1635, lng: 23.8809, continent: 'Europe', pays: 'Lituanie', ville: 'Raseiniai' },
    { lat: 54.7968, lng: 23.0421, continent: 'Europe', pays: 'Lituanie', ville: 'Plunge' },
    { lat: 55.7911, lng: 21.5807, continent: 'Europe', pays: 'Lituanie', ville: 'Skuodas' },
    { lat: 55.7115, lng: 21.7265, continent: 'Europe', pays: 'Lituanie', ville: 'Silale' },
    { lat: 56.9460, lng: 24.1059, continent: 'Europe', pays: 'Lettonie', ville: 'Riga' },
    { lat: 56.9463, lng: 24.1069, continent: 'Europe', pays: 'Lettonie', ville: 'Rīga' },
    { lat: 56.6186, lng: 23.8781, continent: 'Europe', pays: 'Lettonie', ville: 'Daugavpils' },
    { lat: 56.9670, lng: 23.1547, continent: 'Europe', pays: 'Lettonie', ville: 'Liepāja' },
    { lat: 56.6206, lng: 23.7566, continent: 'Europe', pays: 'Lettonie', ville: 'Jelgava' },
    { lat: 56.6500, lng: 23.7111, continent: 'Europe', pays: 'Lettonie', ville: 'Jurmala' },
    { lat: 56.8150, lng: 24.6094, continent: 'Europe', pays: 'Lettonie', ville: 'Ventspils' },
    { lat: 57.5137, lng: 24.7219, continent: 'Europe', pays: 'Lettonie', ville: 'Valmiera' },
    { lat: 56.4969, lng: 27.3358, continent: 'Europe', pays: 'Lettonie', ville: 'Rezekne' },
    { lat: 57.5245, lng: 25.4263, continent: 'Europe', pays: 'Lettonie', ville: 'Cesis' },
    { lat: 57.0345, lng: 25.3592, continent: 'Europe', pays: 'Lettonie', ville: 'Madona' },
    { lat: 56.5483, lng: 27.7215, continent: 'Europe', pays: 'Lettonie', ville: 'Gulbene' },
    { lat: 56.9083, lng: 23.8865, continent: 'Europe', pays: 'Lettonie', ville: 'Ogre' },
    { lat: 56.8593, lng: 24.3314, continent: 'Europe', pays: 'Lettonie', ville: 'Salaspils' },
    { lat: 57.0377, lng: 25.8769, continent: 'Europe', pays: 'Lettonie', ville: 'Aluksne' },
    { lat: 57.8564, lng: 26.0402, continent: 'Europe', pays: 'Lettonie', ville: 'Valka' },
    { lat: 56.7447, lng: 23.7102, continent: 'Europe', pays: 'Lettonie', ville: 'Bauska' },
    { lat: 57.6462, lng: 25.0266, continent: 'Europe', pays: 'Lettonie', ville: 'Limbaži' },
    { lat: 57.5183, lng: 22.7405, continent: 'Europe', pays: 'Lettonie', ville: 'Talsi' },
    { lat: 57.4201, lng: 21.8655, continent: 'Europe', pays: 'Lettonie', ville: 'Tukums' },
    { lat: 50.4501, lng: 30.5234, continent: 'Europe', pays: 'Ukraine', ville: 'Kiev' },
    { lat: 49.8397, lng: 24.0297, continent: 'Europe', pays: 'Ukraine', ville: 'Lviv' },
    { lat: 48.9226, lng: 24.7111, continent: 'Europe', pays: 'Ukraine', ville: 'Uzhhorod' },
    { lat: 46.4775, lng: 30.7326, continent: 'Europe', pays: 'Ukraine', ville: 'Odessa' },
    { lat: 49.5535, lng: 25.5948, continent: 'Europe', pays: 'Ukraine', ville: 'Ivano-Frankivsk' },
    { lat: 48.5090, lng: 32.2659, continent: 'Europe', pays: 'Ukraine', ville: 'Mykolaiv' },
    { lat: 48.4421, lng: 35.0401, continent: 'Europe', pays: 'Ukraine', ville: 'Dnipro' },
    { lat: 48.9226, lng: 24.7111, continent: 'Europe', pays: 'Ukraine', ville: 'Lutsk' },
    { lat: 50.7472, lng: 25.3254, continent: 'Europe', pays: 'Ukraine', ville: 'Rivne' },
    { lat: 48.9167, lng: 24.7167, continent: 'Europe', pays: 'Ukraine', ville: 'Khmelnytskyi' },
    { lat: 49.0458, lng: 31.8700, continent: 'Europe', pays: 'Ukraine', ville: 'Cherkasy' },
    { lat: 50.3615, lng: 30.8899, continent: 'Europe', pays: 'Ukraine', ville: 'Kropyvnytskyi' },
    { lat: 48.6271, lng: 22.2994, continent: 'Europe', pays: 'Ukraine', ville: 'Mukachevo' },
    { lat: 50.3543, lng: 26.6467, continent: 'Europe', pays: 'Ukraine', ville: 'Sumy' },
    { lat: 48.6208, lng: 22.2879, continent: 'Europe', pays: 'Ukraine', ville: 'Uzhgorod' },
    { lat: 50.7500, lng: 25.3333, continent: 'Europe', pays: 'Ukraine', ville: 'Rivne' },
    { lat: 48.4294, lng: 22.7187, continent: 'Europe', pays: 'Ukraine', ville: 'Berehove' },
    { lat: 49.8397, lng: 24.0297, continent: 'Europe', pays: 'Ukraine', ville: 'Lviv' },
    { lat: 48.9226, lng: 24.7111, continent: 'Europe', pays: 'Ukraine', ville: 'Uzhhorod' },
    { lat: 50.7458, lng: 25.3303, continent: 'Europe', pays: 'Ukraine', ville: 'Rivne' },
    { lat: 53.9023, lng: 27.5619, continent: 'Europe', pays: 'Biélorussie', ville: 'Minsk' },
    { lat: 53.9168, lng: 30.3449, continent: 'Europe', pays: 'Biélorussie', ville: 'Gomel' },
    { lat: 52.0976, lng: 23.6877, continent: 'Europe', pays: 'Biélorussie', ville: 'Brest' },
    { lat: 53.1268, lng: 29.1924, continent: 'Europe', pays: 'Biélorussie', ville: 'Vitebsk' },
    { lat: 53.9045, lng: 30.3320, continent: 'Europe', pays: 'Biélorussie', ville: 'Mogilev' },
    { lat: 53.8708, lng: 27.4862, continent: 'Europe', pays: 'Biélorussie', ville: 'Hrodna' },
    { lat: 54.0000, lng: 28.9167, continent: 'Europe', pays: 'Biélorussie', ville: 'Bobruisk' },
    { lat: 53.1333, lng: 29.2167, continent: 'Europe', pays: 'Biélorussie', ville: 'Orsha' },
    { lat: 54.8674, lng: 30.2986, continent: 'Europe', pays: 'Biélorussie', ville: 'Babruysk' },
    { lat: 53.6138, lng: 23.8284, continent: 'Europe', pays: 'Biélorussie', ville: 'Baranovichi' },
    { lat: 53.1333, lng: 29.2167, continent: 'Europe', pays: 'Biélorussie', ville: 'Maladzyechna' },
    { lat: 53.8708, lng: 27.4862, continent: 'Europe', pays: 'Biélorussie', ville: 'Grodno' },
    { lat: 44.8176, lng: 20.4681, continent: 'Europe', pays: 'Serbie', ville: 'Belgrade' },
    { lat: 43.3194, lng: 21.8967, continent: 'Europe', pays: 'Serbie', ville: 'Niš' },
    { lat: 45.2517, lng: 19.8369, continent: 'Europe', pays: 'Serbie', ville: 'Novi Sad' },
    { lat: 44.8666, lng: 20.2739, continent: 'Europe', pays: 'Serbie', ville: 'Zemun' },
    { lat: 42.7284, lng: 19.1077, continent: 'Europe', pays: 'Serbie', ville: 'Kragujevac' },
    { lat: 43.9046, lng: 22.2557, continent: 'Europe', pays: 'Serbie', ville: 'Leskovac' },
    { lat: 43.5511, lng: 21.9050, continent: 'Europe', pays: 'Serbie', ville: 'Subotica' },
    { lat: 44.0165, lng: 21.0059, continent: 'Europe', pays: 'Serbie', ville: 'Čačak' },
    { lat: 42.5697, lng: 21.0519, continent: 'Europe', pays: 'Serbie', ville: 'Priština' },
    { lat: 44.4067, lng: 20.5736, continent: 'Europe', pays: 'Serbie', ville: 'Kraljevo' },
    { lat: 43.8996, lng: 19.8050, continent: 'Europe', pays: 'Serbie', ville: 'Užice' },
    { lat: 44.9780, lng: 20.1604, continent: 'Europe', pays: 'Serbie', ville: 'Pančevo' },
    { lat: 43.7384, lng: 20.4535, continent: 'Europe', pays: 'Serbie', ville: 'Šabac' },
    { lat: 44.7447, lng: 19.6897, continent: 'Europe', pays: 'Serbie', ville: 'Sremska Mitrovica' },
    { lat: 43.6481, lng: 19.6004, continent: 'Europe', pays: 'Serbie', ville: 'Zlatibor' },
    { lat: 44.0390, lng: 21.0059, continent: 'Europe', pays: 'Serbie', ville: 'Gornji Milanovac' },
    { lat: 43.0000, lng: 20.3333, continent: 'Europe', pays: 'Serbie', ville: 'Novi Pazar' },
    { lat: 43.7455, lng: 20.8185, continent: 'Europe', pays: 'Serbie', ville: 'Valjevo' },
    { lat: 44.2226, lng: 22.6216, continent: 'Europe', pays: 'Serbie', ville: 'Pirot' },
    { lat: 45.8144, lng: 15.9780, continent: 'Europe', pays: 'Croatie', ville: 'Zagreb' },
    { lat: 45.1667, lng: 18.0000, continent: 'Europe', pays: 'Croatie', ville: 'Osijek' },
    { lat: 45.3317, lng: 14.4422, continent: 'Europe', pays: 'Croatie', ville: 'Rijeka' },
    { lat: 45.0817, lng: 15.9897, continent: 'Europe', pays: 'Croatie', ville: 'Karlovac' },
    { lat: 45.5481, lng: 18.6944, continent: 'Europe', pays: 'Croatie', ville: 'Vukovar' },
    { lat: 43.5079, lng: 16.4392, continent: 'Europe', pays: 'Croatie', ville: 'Split' },
    { lat: 43.3433, lng: 17.8081, continent: 'Europe', pays: 'Croatie', ville: 'Šibenik' },
    { lat: 45.1803, lng: 18.3800, continent: 'Europe', pays: 'Croatie', ville: 'Vinkovci' },
    { lat: 43.5410, lng: 16.2970, continent: 'Europe', pays: 'Croatie', ville: 'Zadar' },
    { lat: 45.3433, lng: 14.4094, continent: 'Europe', pays: 'Croatie', ville: 'Rijeka' },
    { lat: 45.3744, lng: 14.3878, continent: 'Europe', pays: 'Croatie', ville: 'Opatija' },
    { lat: 45.3408, lng: 14.4576, continent: 'Europe', pays: 'Croatie', ville: 'Crikvenica' },
    { lat: 43.7350, lng: 15.8950, continent: 'Europe', pays: 'Croatie', ville: 'Makarska' },
    { lat: 45.0997, lng: 18.6875, continent: 'Europe', pays: 'Croatie', ville: 'Slavonski Brod' },
    { lat: 44.8683, lng: 13.8481, continent: 'Europe', pays: 'Croatie', ville: 'Pula' },
    { lat: 42.6977, lng: 23.3219, continent: 'Europe', pays: 'Bulgarie', ville: 'Sofia' },
    { lat: 42.2560, lng: 27.6201, continent: 'Europe', pays: 'Bulgarie', ville: 'Burgas' },
    { lat: 43.4237, lng: 24.6136, continent: 'Europe', pays: 'Bulgarie', ville: 'Rousse' },
    { lat: 42.6414, lng: 25.3619, continent: 'Europe', pays: 'Bulgarie', ville: 'Stara Zagora' },
    { lat: 43.3726, lng: 27.8277, continent: 'Europe', pays: 'Bulgarie', ville: 'Varna' },
    { lat: 42.1123, lng: 24.7479, continent: 'Europe', pays: 'Bulgarie', ville: 'Plovdiv' },
    { lat: 42.4267, lng: 25.6419, continent: 'Europe', pays: 'Bulgarie', ville: 'Pazardzhik' },
    { lat: 42.5039, lng: 27.4669, continent: 'Europe', pays: 'Bulgarie', ville: 'Bourgas' },
    { lat: 46.0511, lng: 14.5051, continent: 'Europe', pays: 'Slovénie', ville: 'Ljubljana' },
    { lat: 46.3453, lng: 14.4362, continent: 'Europe', pays: 'Slovénie', ville: 'Maribor' },
    { lat: 46.2361, lng: 15.2675, continent: 'Europe', pays: 'Slovénie', ville: 'Celje' },
    { lat: 46.5116, lng: 15.5515, continent: 'Europe', pays: 'Slovénie', ville: 'Kranj' },
    { lat: 45.5469, lng: 13.7306, continent: 'Europe', pays: 'Slovénie', ville: 'Koper' },
    { lat: 45.5705, lng: 13.7290, continent: 'Europe', pays: 'Slovénie', ville: 'Piran' },
    { lat: 45.9656, lng: 14.5744, continent: 'Europe', pays: 'Slovénie', ville: 'Novo Mesto' },
    { lat: 45.6828, lng: 13.9733, continent: 'Europe', pays: 'Slovénie', ville: 'Izola' },
    { lat: 46.2395, lng: 15.2675, continent: 'Europe', pays: 'Slovénie', ville: 'Celje' },







    

    // North America
    { lat: 40.7128, lng: -74.0060, continent: 'North America' }, // New York City, USA
    { lat: 34.0522, lng: -118.2437, continent: 'North America' }, // Los Angeles, USA
    { lat: 41.8781, lng: -87.6298, continent: 'North America' }, // Chicago, USA
    { lat: 29.7604, lng: -95.3698, continent: 'North America' }, // Houston, USA
    { lat: 33.4484, lng: -112.0740, continent: 'North America' }, // Phoenix, USA
    { lat: 39.7392, lng: -104.9903, continent: 'North America' }, // Denver, USA
    { lat: 25.7617, lng: -80.1918, continent: 'North America' }, // Miami, USA
    { lat: 47.6062, lng: -122.3321, continent: 'North America' }, // Seattle, USA
    { lat: 32.7767, lng: -96.7970, continent: 'North America' }, // Dallas, USA
    { lat: 37.7749, lng: -122.4194, continent: 'North America' }, // San Francisco, USA
    { lat: 39.9526, lng: -75.1652, continent: 'North America' }, // Philadelphia, USA
    { lat: 38.9072, lng: -77.0369, continent: 'North America' }, // Washington, D.C., USA
    { lat: 45.5017, lng: -73.5673, continent: 'North America' }, // Montreal, Canada
    { lat: 43.6511, lng: -79.3470, continent: 'North America' }, // Toronto, Canada
    { lat: 49.2827, lng: -123.1207, continent: 'North America' }, // Vancouver, Canada
    { lat: 29.4241, lng: -98.4936, continent: 'North America' }, // San Antonio, USA
    { lat: 32.7157, lng: -117.1611, continent: 'North America' }, // San Diego, USA
    { lat: 42.3601, lng: -71.0589, continent: 'North America' }, // Boston, USA
    { lat: 44.9778, lng: -93.2650, continent: 'North America' }, // Minneapolis, USA
    { lat: 35.2271, lng: -80.8431, continent: 'North America' }, // Charlotte, USA
    { lat: 36.1627, lng: -86.7816, continent: 'North America' }, // Nashville, USA
    { lat: 30.2672, lng: -97.7431, continent: 'North America' }, // Austin, USA
    { lat: 39.9612, lng: -82.9988, continent: 'North America' }, // Columbus, USA
    { lat: 36.1699, lng: -115.1398, continent: 'North America' }, // Las Vegas, USA
    { lat: 40.7608, lng: -111.8910, continent: 'North America' }, // Salt Lake City, USA
    { lat: 38.2527, lng: -85.7585, continent: 'North America' }, // Louisville, USA
    { lat: 41.2565, lng: -95.9345, continent: 'North America' }, // Omaha, USA
    { lat: 35.0844, lng: -106.6504, continent: 'North America' }, // Albuquerque, USA
    { lat: 39.1031, lng: -84.5120, continent: 'North America' }, // Cincinnati, USA
    { lat: 32.7555, lng: -97.3308, continent: 'North America' }, // Fort Worth, USA
    { lat: 33.4484, lng: -112.0740, continent: 'North America' }, // Phoenix, USA
    { lat: 36.8508, lng: -76.2859, continent: 'North America' }, // Norfolk, USA
    { lat: 38.6270, lng: -90.1994, continent: 'North America' }, // St. Louis, USA
    { lat: 41.3314, lng: -83.0458, continent: 'North America' }, // Detroit, USA
    { lat: 34.0522, lng: -118.2437, continent: 'North America' }, // Los Angeles, USA
    { lat: 37.7749, lng: -122.4194, continent: 'North America' }, // San Francisco, USA
    { lat: 43.6532, lng: -79.3832, continent: 'North America' }, // Toronto, Canada
    { lat: 45.4215, lng: -75.6972, continent: 'North America' }, // Ottawa, Canada
    { lat: 49.2827, lng: -123.1207, continent: 'North America' }, // Vancouver, Canada
    { lat: 53.5461, lng: -113.4938, continent: 'North America' }, // Edmonton, Canada
    { lat: 53.5358, lng: -113.3263, continent: 'North America' }, // Calgary, Canada
    { lat: 48.4284, lng: -123.3656, continent: 'North America' }, // Victoria, Canada
    { lat: 41.4901, lng: -71.3128, continent: 'North America' }, // Providence, USA
    { lat: 40.4406, lng: -79.9959, continent: 'North America' }, // Pittsburgh, USA
    { lat: 34.7478, lng: -92.2896, continent: 'North America' }, // Little Rock, USA
    { lat: 43.0389, lng: -87.9065, continent: 'North America' }, // Milwaukee, USA
    { lat: 32.9538, lng: -96.1116, continent: 'North America' }, // Garland, USA
    { lat: 39.6403, lng: -84.3488, continent: 'North America' }, // Dayton, USA
    { lat: 35.4646, lng: -97.5171, continent: 'North America' }, // Oklahoma City, USA
    { lat: 36.6273, lng: -119.7724, continent: 'North America' }, // Fresno, USA
    { lat: 39.7684, lng: -86.1581, continent: 'North America' }, // Indianapolis, USA
    { lat: 39.7392, lng: -104.9903, continent: 'North America' }, // Denver, USA
    { lat: 33.4484, lng: -112.0740, continent: 'North America' }, // Phoenix, USA
    { lat: 41.2995, lng: -72.9211, continent: 'North America' }, // Hartford, USA
    { lat: 37.6872, lng: -97.3301, continent: 'North America' }, // Wichita, USA
    { lat: 33.4484, lng: -112.0740, continent: 'North America' }, // Phoenix, USA
    { lat: 33.9534, lng: -84.3604, continent: 'North America' }, // Atlanta, USA
    { lat: 45.0289, lng: -74.0253, continent: 'North America' }, // Gatineau, Canada
    { lat: 45.4016, lng: -75.6982, continent: 'North America' }, // Kingston, Canada
    { lat: 49.2827, lng: -123.1207, continent: 'North America' }, // Vancouver, Canada
    { lat: 42.3314, lng: -83.0458, continent: 'North America' }, // Detroit, USA
    { lat: 41.5857, lng: -93.6209, continent: 'North America' }, // Des Moines, USA
    { lat: 32.7767, lng: -96.7970, continent: 'North America' }, // Dallas, USA
    { lat: 44.9787, lng: -93.2670, continent: 'North America' }, // St. Paul, USA
    { lat: 34.0522, lng: -118.2437, continent: 'North America' }, // Los Angeles, USA
    { lat: 47.3668, lng: -122.6100, continent: 'North America' }, // Tacoma, USA
    { lat: 34.7314, lng: -92.2859, continent: 'North America' }, // Little Rock, USA
    { lat: 32.8407, lng: -97.1309, continent: 'North America' }, // Fort Worth, USA
    { lat: 36.8485, lng: -119.7871, continent: 'North America' }, // Fresno, USA
    { lat: 34.9993, lng: -86.9488, continent: 'North America' }, // Huntsville, USA
    { lat: 42.3601, lng: -71.0589, continent: 'North America' }, // Boston, USA
    { lat: 41.3058, lng: -81.5354, continent: 'North America' }, // Cleveland, USA
    { lat: 35.0520, lng: -85.3090, continent: 'North America' }, // Chattanooga, USA
    { lat: 35.6815, lng: -98.4333, continent: 'North America' }, // Norman, USA
    { lat: 32.7831, lng: -96.7990, continent: 'North America' }, // Richardson, USA
    { lat: 40.7142, lng: -74.0064, continent: 'North America' }, // Newark, USA
    { lat: 37.8044, lng: -122.2711, continent: 'North America' }, // Oakland, USA
    { lat: 40.7357, lng: -73.9985, continent: 'North America' }, // Jersey City, USA
    { lat: 39.7392, lng: -104.9903, continent: 'North America' }, // Denver, USA
    { lat: 38.6322, lng: -90.1994, continent: 'North America' }, // St. Louis, USA
    { lat: 34.1865, lng: -118.2925, continent: 'North America' }, // Santa Ana, USA
    { lat: 43.0520, lng: -87.9176, continent: 'North America' }, // Milwaukee, USA
    { lat: 30.6582, lng: -88.0431, continent: 'North America' }, // Mobile, USA
    { lat: 35.1559, lng: -90.0545, continent: 'North America' }, // Memphis, USA
    { lat: 35.6569, lng: -106.5225, continent: 'North America' }, // Santa Fe, USA
    { lat: 33.4484, lng: -112.0740, continent: 'North America' }, // Phoenix, USA
    { lat: 47.6626, lng: -122.1480, continent: 'North America' }, // Bellevue, USA
    { lat: 42.6512, lng: -83.7717, continent: 'North America' }, // Warren, USA
    { lat: 40.7306, lng: -73.9352, continent: 'North America' }, // New York, USA
    { lat: 38.5733, lng: -121.4870, continent: 'North America' }, // Sacramento, USA
    { lat: 39.7392, lng: -104.9903, continent: 'North America' }, // Denver, USA
    { lat: 47.6062, lng: -122.3321, continent: 'North America' }, // Seattle, USA
    { lat: 41.4965, lng: -81.6950, continent: 'North America' }, // Akron, USA
    { lat: 35.8410, lng: -90.7030, continent: 'North America' }, // Jonesboro, USA
    { lat: 44.9866, lng: -93.1774, continent: 'North America' }, // Rochester, USA
    { lat: 42.3736, lng: -71.1247, continent: 'North America' }, // Lowell, USA
    { lat: 44.5659, lng: -78.2230, continent: 'North America' }, // Peterborough, Canada
    { lat: 41.8692, lng: -87.6342, continent: 'North America' }, // Evanston, USA
    { lat: 40.2979, lng: -76.8901, continent: 'North America' }, // Harrisburg, USA
    { lat: 39.6403, lng: -84.3488, continent: 'North America' }, // Dayton, USA
    { lat: 43.5822, lng: -96.7284, continent: 'North America' }, // Sioux Falls, USA
    { lat: 42.7364, lng: -84.5629, continent: 'North America' }, // Lansing, USA
    { lat: 45.4384, lng: -75.6991, continent: 'North America' }, // Ottawa, Canada
    { lat: 42.2794, lng: -83.7360, continent: 'North America' }, // Livonia, USA
    { lat: 41.0499, lng: -73.1226, continent: 'North America' }, // Norwalk, USA
    { lat: 41.7488, lng: -87.9755, continent: 'North America' }, // Schaumburg, USA
    { lat: 32.7981, lng: -96.6773, continent: 'North America' }, // McKinney, USA
    { lat: 43.0869, lng: -80.2532, continent: 'North America' }, // Kitchener, Canada
    { lat: 41.0246, lng: -74.3465, continent: 'North America' }, // Yonkers, USA
    { lat: 43.5538, lng: -79.5656, continent: 'North America' }, // Brampton, Canada
    { lat: 30.2672, lng: -97.7431, continent: 'North America' }, // Austin, USA
    { lat: 35.1808, lng: -80.8349, continent: 'North America' }, // Gastonia, USA
    { lat: 45.4215, lng: -75.6972, continent: 'North America' }, // Ottawa, Canada
    { lat: 45.5426, lng: -73.5482, continent: 'North America' }, // Longueuil, Canada
    { lat: 44.7687, lng: -63.8762, continent: 'North America' }, // Halifax, Canada
    { lat: 43.6511, lng: -79.3470, continent: 'North America' }, // Toronto, Canada
    { lat: 48.4284, lng: -123.3656, continent: 'North America' }, // Victoria, Canada
    { lat: 53.5461, lng: -113.4938, continent: 'North America' }, // Edmonton, Canada
    { lat: 44.6432, lng: -63.5752, continent: 'North America' }, // Dartmouth, Canada
    { lat: 45.5017, lng: -73.5673, continent: 'North America' }, // Montreal, Canada
    { lat: 41.6156, lng: -74.3152, continent: 'North America' }, // Poughkeepsie, USA
    { lat: 44.9749, lng: -93.2650, continent: 'North America' }, // Minneapolis, USA
    { lat: 38.5750, lng: -121.4939, continent: 'North America' }, // Stockton, USA
    { lat: 33.8889, lng: -117.9520, continent: 'North America' }, // Riverside, USA
    { lat: 36.2784, lng: -119.2075, continent: 'North America' }, // Clovis, USA
    { lat: 30.6954, lng: -88.0379, continent: 'North America' }, // Mobile, USA
    { lat: 37.2154, lng: -119.7532, continent: 'North America' }, // Visalia, USA
    { lat: 42.7595, lng: -73.4082, continent: 'North America' }, // Troy, USA
    { lat: 35.9921, lng: -82.5529, continent: 'North America' }, // Johnson City, USA
    { lat: 30.6294, lng: -96.3149, continent: 'North America' }, // Bryan, USA
    { lat: 37.2909, lng: -119.8518, continent: 'North America' }, // Manteca, USA
    { lat: 42.0493, lng: -88.0131, continent: 'North America' }, // Waukegan, USA
    { lat: 39.9468, lng: -82.9926, continent: 'North America' }, // Lancaster, USA
    { lat: 37.4299, lng: -119.8869, continent: 'North America' }, // Turlock, USA
    { lat: 38.4011, lng: -122.0134, continent: 'North America' }, // Petaluma, USA
    { lat: 41.8799, lng: -88.0120, continent: 'North America' }, // Downers Grove, USA
    { lat: 40.7311, lng: -73.9976, continent: 'North America' }, // Brooklyn, USA
    { lat: 42.3601, lng: -71.0589, continent: 'North America' }, // Boston, USA
    { lat: 43.0369, lng: -87.9521, continent: 'North America' }, // West Allis, USA
    { lat: 41.1533, lng: -81.3561, continent: 'North America' }, // Lakewood, USA
    { lat: 41.4995, lng: -81.6954, continent: 'North America' }, // Cleveland, USA
    { lat: 38.9970, lng: -76.9923, continent: 'North America' }, // Laurel, USA
    { lat: 41.8755, lng: -87.6244, continent: 'North America' }, // Chicago, USA
    { lat: 32.5265, lng: -94.7694, continent: 'North America' }, // Longview, USA
    { lat: 36.1417, lng: -86.8175, continent: 'North America' }, // Franklin, USA
    { lat: 30.6128, lng: -96.3465, continent: 'North America' }, // Navasota, USA
    { lat: 34.5800, lng: -81.2001, continent: 'North America' }, // Spartanburg, USA
    { lat: 45.4111, lng: -75.6490, continent: 'North America' }, // Gatineau, Canada
    { lat: 37.6740, lng: -121.9587, continent: 'North America' }, // Morgan Hill, USA
    { lat: 41.5888, lng: -93.7446, continent: 'North America' }, // West Des Moines, USA
    { lat: 40.0348, lng: -105.3112, continent: 'North America' }, // Boulder, USA
    { lat: 36.8508, lng: -76.2859, continent: 'North America' }, // Norfolk, USA
    { lat: 42.9404, lng: -75.9173, continent: 'North America' }, // Johnson City, USA
    { lat: 39.1594, lng: -95.6894, continent: 'North America' }, // Topeka, USA
    { lat: 42.7805, lng: -83.7316, continent: 'North America' }, // Pontiac, USA
    { lat: 40.0373, lng: -76.6533, continent: 'North America' }, // Reading, USA
    { lat: 45.4220, lng: -75.6972, continent: 'North America' }, // Ottawa, Canada
    { lat: 36.8220, lng: -121.8257, continent: 'North America' }, // Salinas, USA
    { lat: 33.6189, lng: -116.7330, continent: 'North America' }, // Palm Springs, USA
    { lat: 38.7444, lng: -121.9864, continent: 'North America' }, // Vacaville, USA
    { lat: 45.5980, lng: -73.5640, continent: 'North America' }, // Repentigny, Canada
    { lat: 33.5207, lng: -86.8025, continent: 'North America' }, // Birmingham, USA
    { lat: 35.1065, lng: -80.4519, continent: 'North America' }, // Concord, USA
    { lat: 30.5823, lng: -96.3763, continent: 'North America' }, // College Station, USA
    { lat: 32.9190, lng: -96.6989, continent: 'North America' }, // Cedar Hill, USA
    { lat: 35.9930, lng: -80.1613, continent: 'North America' }, // Gastonia, USA
    { lat: 37.9541, lng: -92.2081, continent: 'North America' }, // Nixa, USA
    { lat: 42.7312, lng: -83.7431, continent: 'North America' }, // Wyandotte, USA
    { lat: 30.6992, lng: -88.0431, continent: 'North America' }, // Mobile, USA
    { lat: 36.9690, lng: -120.0265, continent: 'North America' }, // Clovis, USA
    { lat: 34.0610, lng: -118.2347, continent: 'North America' }, // Burbank, USA

    // South America
    { lat: 19.4326, lng: -99.1332, continent: 'Amérique Centrale/Sud' }, // Mexico City, Mexique
    { lat: 23.6345, lng: -102.5528, continent: 'Amérique Centrale/Sud' }, // Guadalajara, Mexique
    { lat: 25.6866, lng: -100.3161, continent: 'Amérique Centrale/Sud' }, // Monterrey, Mexique
    { lat: 18.4655, lng: -66.1057, continent: 'Amérique Centrale/Sud' }, // San Juan, Porto Rico
    { lat: 10.4920, lng: -84.0888, continent: 'Amérique Centrale/Sud' }, // San José, Costa Rica
    { lat: 9.9281, lng: -84.0907, continent: 'Amérique Centrale/Sud' }, // Alajuela, Costa Rica
    { lat: 10.3006, lng: -83.7471, continent: 'Amérique Centrale/Sud' }, // Cartago, Costa Rica
    { lat: 8.9824, lng: -79.5199, continent: 'Amérique Centrale/Sud' }, // Panama City, Panama
    { lat: 7.9833, lng: -80.5667, continent: 'Amérique Centrale/Sud' }, // David, Panama
    { lat: 10.4860, lng: -84.7140, continent: 'Amérique Centrale/Sud' }, // Heredia, Costa Rica
    { lat: 12.1150, lng: -86.2396, continent: 'Amérique Centrale/Sud' }, // Managua, Nicaragua
    { lat: 12.3450, lng: -86.1650, continent: 'Amérique Centrale/Sud' }, // León, Nicaragua
    { lat: 11.9783, lng: -85.1144, continent: 'Amérique Centrale/Sud' }, // Granada, Nicaragua
    { lat: 13.6711, lng: -83.5233, continent: 'Amérique Centrale/Sud' }, // Tegucigalpa, Honduras
    { lat: 15.5000, lng: -88.0176, continent: 'Amérique Centrale/Sud' }, // San Pedro Sula, Honduras
    { lat: 14.6349, lng: -90.5069, continent: 'Amérique Centrale/Sud' }, // Guatemala City, Guatemala
    { lat: 13.9950, lng: -89.6727, continent: 'Amérique Centrale/Sud' }, // Santa Ana, El Salvador
    { lat: 13.7034, lng: -89.1873, continent: 'Amérique Centrale/Sud' }, // San Salvador, El Salvador
    { lat: 13.4250, lng: -88.4891, continent: 'Amérique Centrale/Sud' }, // San Miguel, El Salvador
    { lat: 12.0364, lng: -86.0301, continent: 'Amérique Centrale/Sud' }, // León, Nicaragua
    { lat: -34.6037, lng: -58.3816, continent: 'Amérique Centrale/Sud' }, // Buenos Aires, Argentine
    { lat: -34.7998, lng: -58.5244, continent: 'Amérique Centrale/Sud' }, // La Plata, Argentine
    { lat: -31.4201, lng: -64.1888, continent: 'Amérique Centrale/Sud' }, // Córdoba, Argentine
    { lat: -32.9494, lng: -60.6953, continent: 'Amérique Centrale/Sud' }, // Santa Fe, Argentine
    { lat: -33.4489, lng: -70.6693, continent: 'Amérique Centrale/Sud' }, // Santiago, Chili
    { lat: -33.4619, lng: -70.6450, continent: 'Amérique Centrale/Sud' }, // Valparaíso, Chili
    { lat: -38.7369, lng: -72.5905, continent: 'Amérique Centrale/Sud' }, // Temuco, Chili
    { lat: -22.9068, lng: -43.1729, continent: 'Amérique Centrale/Sud' }, // Rio de Janeiro, Brésil
    { lat: -23.5505, lng: -46.6333, continent: 'Amérique Centrale/Sud' }, // São Paulo, Brésil
    { lat: -15.7801, lng: -47.9292, continent: 'Amérique Centrale/Sud' }, // Brasília, Brésil
    { lat: -25.4284, lng: -49.2733, continent: 'Amérique Centrale/Sud' }, // Curitiba, Brésil
    { lat: -30.0170, lng: -51.2287, continent: 'Amérique Centrale/Sud' }, // Porto Alegre, Brésil
    { lat: -3.7172, lng: -38.5433, continent: 'Amérique Centrale/Sud' }, // Fortaleza, Brésil
    { lat: -12.9714, lng: -38.5014, continent: 'Amérique Centrale/Sud' }, // Salvador, Brésil
    { lat: -8.0476, lng: -34.8772, continent: 'Amérique Centrale/Sud' }, // Recife, Brésil
    { lat: -23.5505, lng: -46.6333, continent: 'Amérique Centrale/Sud' }, // São Paulo, Brésil
    { lat: -1.4553, lng: -48.5039, continent: 'Amérique Centrale/Sud' }, // Belém, Brésil
    { lat: -15.7801, lng: -47.9292, continent: 'Amérique Centrale/Sud' }, // Brasília, Brésil
    { lat: -22.6702, lng: -45.0054, continent: 'Amérique Centrale/Sud' }, // Pouso Alegre, Brésil
    { lat: -22.2372, lng: -45.7792, continent: 'Amérique Centrale/Sud' }, // Campos do Jordão, Brésil
    { lat: 4.6115, lng: -74.0818, continent: 'Amérique Centrale/Sud' }, // Bogotá, Colombie
    { lat: 10.9716, lng: -74.8030, continent: 'Amérique Centrale/Sud' }, // Barranquilla, Colombie
    { lat: 3.4372, lng: -76.5226, continent: 'Amérique Centrale/Sud' }, // Cali, Colombie
    { lat: 8.9700, lng: -74.8000, continent: 'Amérique Centrale/Sud' }, // Bucaramanga, Colombie
    { lat: 6.2442, lng: -75.5812, continent: 'Amérique Centrale/Sud' }, // Medellín, Colombie
    { lat: 9.9388, lng: -75.5105, continent: 'Amérique Centrale/Sud' }, // Cartagena, Colombie
    { lat: -4.5981, lng: -74.0758, continent: 'Amérique Centrale/Sud' }, // Bogotá, Colombie
    { lat: 8.9700, lng: -74.8000, continent: 'Amérique Centrale/Sud' }, // Bucaramanga, Colombie
    { lat: -23.5505, lng: -46.6333, continent: 'Amérique Centrale/Sud' }, // São Paulo, Brésil
    { lat: 5.0695, lng: -75.5130, continent: 'Amérique Centrale/Sud' }, // Manizales, Colombie
    { lat: 7.0692, lng: -75.5144, continent: 'Amérique Centrale/Sud' }, // Montería, Colombie
    { lat: 4.5709, lng: -74.2973, continent: 'Amérique Centrale/Sud' }, // Villavicencio, Colombie
    { lat: 3.4284, lng: -76.5394, continent: 'Amérique Centrale/Sud' }, // Pasto, Colombie
    { lat: -17.7932, lng: -63.1805, continent: 'Amérique Centrale/Sud' }, // Santa Cruz, Bolivie
    { lat: -16.5000, lng: -68.1193, continent: 'Amérique Centrale/Sud' }, // La Paz, Bolivie
    { lat: -17.7833, lng: -63.1821, continent: 'Amérique Centrale/Sud' }, // Cochabamba, Bolivie
    { lat: -12.0482, lng: -77.0428, continent: 'Amérique Centrale/Sud' }, // Lima, Pérou
    { lat: -12.0185, lng: -77.0434, continent: 'Amérique Centrale/Sud' }, // Callao, Pérou
    { lat: -15.7841, lng: -70.0207, continent: 'Amérique Centrale/Sud' }, // Arequipa, Pérou
    { lat: -8.0467, lng: -77.2182, continent: 'Amérique Centrale/Sud' }, // Trujillo, Pérou
    { lat: -4.4397, lng: -81.5375, continent: 'Amérique Centrale/Sud' }, // Piura, Pérou
    { lat: -12.0420, lng: -77.0283, continent: 'Amérique Centrale/Sud' }, // Iquitos, Pérou
    { lat: -12.0270, lng: -77.1595, continent: 'Amérique Centrale/Sud' }, // Huancayo, Pérou
    { lat: -12.2289, lng: -77.0004, continent: 'Amérique Centrale/Sud' }, // Cajamarca, Pérou
    { lat: -1.2921, lng: -79.1874, continent: 'Amérique Centrale/Sud' }, // Guayaquil, Équateur
    { lat: -0.2299, lng: -78.5249, continent: 'Amérique Centrale/Sud' }, // Quito, Équateur
    { lat: -1.2840, lng: -78.4822, continent: 'Amérique Centrale/Sud' }, // Cuenca, Équateur
    { lat: -1.4618, lng: -78.1970, continent: 'Amérique Centrale/Sud' }, // Machala, Équateur
    { lat: -19.4960, lng: -65.5882, continent: 'Amérique Centrale/Sud' }, // Sucre, Bolivie
    { lat: -16.5000, lng: -68.1193, continent: 'Amérique Centrale/Sud' }, // La Paz, Bolivie
    { lat: -10.4931, lng: -75.1816, continent: 'Amérique Centrale/Sud' }, // Tarija, Bolivie 
    { lat: 0.4569, lng: -78.1670, continent: 'Amérique Centrale/Sud' }, // Esmeraldas, Équateur
    { lat: -4.5999, lng: -74.0721, continent: 'Amérique Centrale/Sud' }, // Bogotá, Colombie
    { lat: -33.4489, lng: -70.6693, continent: 'Amérique Centrale/Sud' }, // Santiago, Chili
    { lat: -34.5952, lng: -58.3819, continent: 'Amérique Centrale/Sud' }, // Buenos Aires, Argentine
    { lat: 13.6711, lng: -83.5233, continent: 'Amérique Centrale/Sud' }, // Tegucigalpa, Honduras
    { lat: -34.9011, lng: -56.1645, continent: 'Amérique Centrale/Sud' }, // Montevideo, Uruguay
    { lat: -34.7866, lng: -56.1771, continent: 'Amérique Centrale/Sud' }, // Salto, Uruguay
    { lat: -34.9144, lng: -56.2030, continent: 'Amérique Centrale/Sud' }, // Paysandú, Uruguay
    { lat: -30.0588, lng: -51.2287, continent: 'Amérique Centrale/Sud' }, // Porto Alegre, Brésil
    { lat: -20.3128, lng: -40.2910, continent: 'Amérique Centrale/Sud' }, // Vila Velha, Brésil
    { lat: -22.2000, lng: -42.5000, continent: 'Amérique Centrale/Sud' }, // Cabo Frio, Brésil
    { lat: -21.7500, lng: -45.4000, continent: 'Amérique Centrale/Sud' }, // Pouso Alegre, Brésil
    { lat: -24.1000, lng: -46.6400, continent: 'Amérique Centrale/Sud' }, // São Sebastião, Brésil
    { lat: -22.9028, lng: -43.1718, continent: 'Amérique Centrale/Sud' }, // Niterói, Brésil
    { lat: -23.2243, lng: -45.8760, continent: 'Amérique Centrale/Sud' }, // Taubaté, Brésil

    // Asia
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 34.3333, lng: 132.4667, continent: 'Asia' }, // Hiroshima, Japon
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 23.1291, lng: 113.2644, continent: 'Asia' }, // Guangzhou, Chine
    { lat: 31.2304, lng: 121.4737, continent: 'Asia' }, // Shanghai, Chine
    { lat: 22.3193, lng: 114.1694, continent: 'Asia' }, // Hong Kong, Chine
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 19.0760, lng: 72.8777, continent: 'Asia' }, // Mumbai, Inde
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 35.1802, lng: 136.9066, continent: 'Asia' }, // Nagoya, Japon
    { lat: 32.7157, lng: 130.7129, continent: 'Asia' }, // Kumamoto, Japon
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 13.4241, lng: 122.56, continent: 'Asia' }, // Manille, Philippines
    { lat: 34.7990, lng: 138.7933, continent: 'Asia' }, // Shizuoka, Japon
    { lat: 23.8103, lng: 90.4125, continent: 'Asia' }, // Dhaka, Bangladesh
    { lat: 12.5655, lng: 104.9910, continent: 'Asia' }, // Phnom Penh, Cambodge
    { lat: 25.0343, lng: 121.5645, continent: 'Asia' }, // Taipei, Taïwan
    { lat: 3.139, lng: 101.6869, continent: 'Asia' }, // Kuala Lumpur, Malaisie
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 31.2304, lng: 121.4737, continent: 'Asia' }, // Shanghai, Chine
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 35.1802, lng: 136.9066, continent: 'Asia' }, // Nagoya, Japon
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 34.7990, lng: 138.7933, continent: 'Asia' }, // Shizuoka, Japon
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 16.5079, lng: 80.6480, continent: 'Asia' }, // Vijayawada, Inde
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 32.7157, lng: 130.7129, continent: 'Asia' }, // Kumamoto, Japon
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 31.2304, lng: 121.4737, continent: 'Asia' }, // Shanghai, Chine
    { lat: 13.0827, lng: 80.2707, continent: 'Asia' }, // Chennai, Inde
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 22.3193, lng: 114.1694, continent: 'Asia' }, // Hong Kong, Chine
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 31.2304, lng: 121.4737, continent: 'Asia' }, // Shanghai, Chine
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 14.6349, lng: -90.5069, continent: 'Asia' }, // Guatemala
    { lat: 13.0827, lng: 80.2707, continent: 'Asia' }, // Chennai, Inde
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 22.3193, lng: 114.1694, continent: 'Asia' }, // Hong Kong
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 13.7367, lng: 100.5230, continent: 'Asia' }, // Bangkok, Thaïlande
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 22.3193, lng: 114.1694, continent: 'Asia' }, // Hong Kong
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 35.6895, lng: 139.6917, continent: 'Asia' }, // Tokyo, Japon
    { lat: 1.3521, lng: 103.8198, continent: 'Asia' }, // Singapour
    { lat: 39.9042, lng: 116.4074, continent: 'Asia' }, // Pékin, Chine
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 22.3964, lng: 114.1095, continent: 'Asia' }, // Hong Kong
    { lat: 37.5665, lng: 126.9780, continent: 'Asia' }, // Séoul, Corée du Sud
    { lat: 14.5995, lng: 120.9842, continent: 'Asia' }, // Manille, Philippines
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon
    { lat: 28.6139, lng: 77.2090, continent: 'Asia' }, // New Delhi, Inde
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 14.0583, lng: 108.2772, continent: 'Asia' }, // Vietnam
    { lat: 12.9716, lng: 77.5946, continent: 'Asia' }, // Bangalore, Inde
    { lat: 35.6762, lng: 139.6503, continent: 'Asia' }, // Tokyo, Japon

    //Australie

    { lat: -33.8688, lng: 151.2093, continent: 'Australia', ville: 'Sydney' },
    { lat: -37.8136, lng: 144.9631, continent: 'Australia', ville: 'Melbourne' },
    { lat: -27.4698, lng: 153.0251, continent: 'Australia', ville: 'Brisbane' },
    { lat: -31.9505, lng: 115.8605, continent: 'Australia', ville: 'Perth' },
    { lat: -34.9285, lng: 138.6007, continent: 'Australia', ville: 'Adelaide' },
    { lat: -35.2809, lng: 149.1300, continent: 'Australia', ville: 'Canberra' },
    { lat: -32.9283, lng: 151.7817, continent: 'Australia', ville: 'Newcastle' },
    { lat: -28.0167, lng: 153.4000, continent: 'Australia', ville: 'Gold Coast' },
    { lat: -42.8806, lng: 147.3250, continent: 'Australia', ville: 'Hobart' },
    { lat: -12.4634, lng: 130.8456, continent: 'Australia', ville: 'Darwin' },
    { lat: -33.719, lng: 150.9931, continent: 'Australia', ville: 'Penrith' },
    { lat: -27.562, lng: 153.033, continent: 'Australia', ville: 'Logan City' },
    { lat: -19.2564, lng: 146.8184, continent: 'Australia', ville: 'Townsville' },
    { lat: -32.9267, lng: 151.7809, continent: 'Australia', ville: 'Lake Macquarie' },
    { lat: -27.477, lng: 153.0281, continent: 'Australia', ville: 'Redland City' },
    { lat: -33.8333, lng: 151.0833, continent: 'Australia', ville: 'Hornsby' },
    { lat: -27.5461, lng: 153.0671, continent: 'Australia', ville: 'Ipswich' },
    { lat: -33.7642, lng: 150.9282, continent: 'Australia', ville: 'Blacktown' },
    { lat: -34.0299, lng: 151.0925, continent: 'Australia', ville: 'Sutherland' },
    { lat: -28.1679, lng: 153.545, continent: 'Australia', ville: 'Tweed Heads' },
    { lat: -33.8003, lng: 151.1693, continent: 'Australia', ville: 'Ryde' },
    { lat: -37.8409, lng: 144.9465, continent: 'Australia', ville: 'Geelong' },
    { lat: -35.1502, lng: 147.4672, continent: 'Australia', ville: 'Wagga Wagga' },
    { lat: -33.4149, lng: 151.3116, continent: 'Australia', ville: 'Central Coast' },
    { lat: -34.4331, lng: 150.8831, continent: 'Australia', ville: 'Wollongong' },
    { lat: -38.1502, lng: 145.1338, continent: 'Australia', ville: 'Frankston' },
    { lat: -33.035, lng: 137.5833, continent: 'Australia', ville: 'Port Augusta' },
    { lat: -38.6833, lng: 145.7167, continent: 'Australia', ville: 'Wonthaggi' },
    { lat: -20.3104, lng: 118.6060, continent: 'Australia', ville: 'Port Hedland' },
    { lat: -33.8913, lng: 151.2767, continent: 'Australia', ville: 'Bondi Beach' },
    { lat: -33.9784, lng: 151.236, continent: 'Australia', ville: 'Maroubra' },
    { lat: -32.2438, lng: 148.6086, continent: 'Australia', ville: 'Dubbo' },
    { lat: -41.4555, lng: 145.9479, continent: 'Australia', ville: 'Burnie' },
    { lat: -33.7204, lng: 151.1035, continent: 'Australia', ville: 'Chatswood' },
    { lat: -32.927, lng: 151.7849, continent: 'Australia', ville: 'Cessnock' },
    { lat: -12.3606, lng: 130.8685, continent: 'Australia', ville: 'Palmerston' },
    { lat: -37.6583, lng: 145.0045, continent: 'Australia', ville: 'Thomastown' },
    { lat: -33.8736, lng: 151.2187, continent: 'Australia', ville: 'Double Bay' },
    { lat: -26.6811, lng: 153.1067, continent: 'Australia', ville: 'Noosa Heads' },
    { lat: -37.6357, lng: 144.8832, continent: 'Australia', ville: 'Sunbury' },

    //NZ
    { lat: -36.8485, lng: 174.7633, continent: 'Oceania', ville: 'Auckland' },
    { lat: -41.2865, lng: 174.7762, continent: 'Oceania', ville: 'Wellington' },
    { lat: -43.5321, lng: 172.6362, continent: 'Oceania', ville: 'Christchurch' },
    { lat: -45.8788, lng: 170.5028, continent: 'Oceania', ville: 'Dunedin' },
    { lat: -38.1368, lng: 176.2497, continent: 'Oceania', ville: 'Rotorua' },
    { lat: -37.6878, lng: 176.1651, continent: 'Oceania', ville: 'Tauranga' },
    { lat: -39.4949, lng: 176.9120, continent: 'Oceania', ville: 'Napier' },
    { lat: -37.7870, lng: 175.2793, continent: 'Oceania', ville: 'Hamilton' },
    { lat: -46.4132, lng: 168.3538, continent: 'Oceania', ville: 'Invercargill' },
    { lat: -38.6623, lng: 178.0176, continent: 'Oceania', ville: 'Gisborne' },
    { lat: -36.8055, lng: 174.7590, continent: 'Oceania', ville: 'North Shore' },
    { lat: -41.2706, lng: 173.2839, continent: 'Oceania', ville: 'Nelson' },
    { lat: -38.6878, lng: 176.0706, continent: 'Oceania', ville: 'Taupo' },
    { lat: -38.6861, lng: 176.0702, continent: 'Oceania', ville: 'Whakatane' },
    { lat: -37.7923, lng: 175.3069, continent: 'Oceania', ville: 'Cambridge' },
    { lat: -38.5248, lng: 145.1638, continent: 'Oceania', ville: 'Whangarei' },
    { lat: -45.0312, lng: 168.6625, continent: 'Oceania', ville: 'Queenstown' },
    { lat: -46.1391, lng: 167.9395, continent: 'Oceania', ville: 'Riverton' },
    { lat: -39.0578, lng: 174.0785, continent: 'Oceania', ville: 'New Plymouth' },
    { lat: -40.9526, lng: 175.6571, continent: 'Oceania', ville: 'Palmerston North' },
    { lat: -38.0569, lng: 175.7410, continent: 'Oceania', ville: 'Te Awamutu' },
    { lat: -39.0556, lng: 177.8452, continent: 'Oceania', ville: 'Hastings' },
    { lat: -40.9595, lng: 175.6055, continent: 'Oceania', ville: 'Masterton' },
    { lat: -39.6199, lng: 176.8617, continent: 'Oceania', ville: 'Havelock North' },
    { lat: -40.8138, lng: 175.6950, continent: 'Oceania', ville: 'Feilding' },
    { lat: -37.1396, lng: 175.6125, continent: 'Oceania', ville: 'Pukekohe' },
    { lat: -39.6373, lng: 176.8468, continent: 'Oceania', ville: 'Waipawa' },
    { lat: -38.7080, lng: 174.1265, continent: 'Oceania', ville: 'Hawera' },
    { lat: -44.0370, lng: 171.5802, continent: 'Oceania', ville: 'Timaru' },
    { lat: -41.1255, lng: 174.8726, continent: 'Oceania', ville: 'Upper Hutt' },
    { lat: -41.1202, lng: 174.8544, continent: 'Oceania', ville: 'Lower Hutt' },

    //Afrique

    { lat: -33.9249, lng: 18.4241, continent: 'Africa', pays: 'South Africa', ville: 'Cape Town' },
    { lat: -26.2041, lng: 28.0473, continent: 'Africa', pays: 'South Africa', ville: 'Johannesburg' },
    { lat: -25.7479, lng: 28.2293, continent: 'Africa', pays: 'South Africa', ville: 'Pretoria' },
    { lat: -34.035, lng: 18.4564, continent: 'Africa', pays: 'South Africa', ville: 'Durban' },
    { lat: 9.0579, lng: 7.4951, continent: 'Africa', pays: 'Nigeria', ville: 'Abuja' },
    { lat: 12.9714, lng: 39.4699, continent: 'Africa', pays: 'Ethiopia', ville: 'Mekele' },
    { lat: -12.0464, lng: -77.0428, continent: 'Africa', pays: 'Angola', ville: 'Luanda' },
    { lat: 12.1048, lng: -14.9292, continent: 'Africa', pays: 'Guinea', ville: 'Conakry' },
    { lat: 30.0444, lng: 31.2357, continent: 'Africa', pays: 'Egypt', ville: 'Cairo' },
    { lat: -17.8249, lng: 31.0492, continent: 'Africa', pays: 'Zimbabwe', ville: 'Harare' },
    { lat: 15.3875, lng: 30.4328, continent: 'Africa', pays: 'Sudan', ville: 'Khartoum' },
    { lat: -1.9499, lng: 30.0588, continent: 'Africa', pays: 'Rwanda', ville: 'Kigali' },
    { lat: 14.7167, lng: -17.4677, continent: 'Africa', pays: 'Senegal', ville: 'Dakar' },
    { lat: 36.7529, lng: 3.0420, continent: 'Africa', pays: 'Algeria', ville: 'Algiers' },
    { lat: 3.1390, lng: 101.6869, continent: 'Africa', pays: 'Uganda', ville: 'Kampala' },
    { lat: -23.6980, lng: 133.8807, continent: 'Africa', pays: 'Namibia', ville: 'Windhoek' },
    { lat: 14.5514, lng: 121.0184, continent: 'Africa', pays: 'Zimbabwe', ville: 'Bulawayo' },
    { lat: 6.5244, lng: 3.3792, continent: 'Africa', pays: 'Nigeria', ville: 'Lagos' },
    { lat: 5.6037, lng: -0.1870, continent: 'Africa', pays: 'Ghana', ville: 'Accra' },
    { lat: -12.0464, lng: -77.0428, continent: 'Africa', pays: 'Angola', ville: 'Luanda' },
    { lat: 12.1048, lng: -14.9292, continent: 'Africa', pays: 'Guinea', ville: 'Conakry' },
    { lat: 15.3375, lng: 30.4328, continent: 'Africa', pays: 'Sudan', ville: 'Khartoum' },
    { lat: -1.9499, lng: 30.0588, continent: 'Africa', pays: 'Rwanda', ville: 'Kigali' },
    { lat: 14.7167, lng: -17.4677, continent: 'Africa', pays: 'Senegal', ville: 'Dakar' },
    { lat: 36.7529, lng: 3.0420, continent: 'Africa', pays: 'Algeria', ville: 'Algiers' },
    { lat: -1.2833, lng: 36.8167, continent: 'Africa', pays: 'Kenya', ville: 'Nairobi' },
    { lat: -34.9258, lng: 138.5998, continent: 'Africa', pays: 'South Africa', ville: 'Port Elizabeth' },
    { lat: 30.0444, lng: 31.2357, continent: 'Africa', pays: 'Egypt', ville: 'Cairo' },
    { lat: -34.05, lng: 18.4667, continent: 'Africa', pays: 'South Africa', ville: 'Cape Town' },
    { lat: -25.7479, lng: 28.2293, continent: 'Africa', pays: 'South Africa', ville: 'Pretoria' },
    { lat: -29.8587, lng: 31.0218, continent: 'Africa', pays: 'South Africa', ville: 'Durban' },
    { lat: 3.8480, lng: 11.5021, continent: 'Africa', pays: 'Cameroon', ville: 'Yaounde' },
    { lat: -6.7698, lng: 39.2433, continent: 'Africa', pays: 'Tanzania', ville: 'Dar es Salaam' },
    { lat: 6.5244, lng: 3.3792, continent: 'Africa', pays: 'Nigeria', ville: 'Lagos' },
    { lat: -4.3224, lng: 15.3070, continent: 'Africa', pays: 'DR Congo', ville: 'Kinshasa' },
    { lat: 12.6392, lng: -8.0029, continent: 'Africa', pays: 'Mali', ville: 'Bamako' },
    { lat: -12.0347, lng: -77.0428, continent: 'Africa', pays: 'Angola', ville: 'Luanda' },
    { lat: 4.8156, lng: 7.0498, continent: 'Africa', pays: 'Nigeria', ville: 'Port Harcourt' },
    { lat: 4.8481, lng: 31.5825, continent: 'Africa', pays: 'South Sudan', ville: 'Juba' },
    { lat: -22.9576, lng: 18.4904, continent: 'Africa', pays: 'Namibia', ville: 'Windhoek' },
    { lat: 7.9465, lng: -1.0232, continent: 'Africa', pays: 'Ghana', ville: 'Kumasi' },
    { lat: 9.0579, lng: 7.4951, continent: 'Africa', pays: 'Nigeria', ville: 'Abuja' },
    { lat: 3.1390, lng: 101.6869, continent: 'Africa', pays: 'Uganda', ville: 'Kampala' },
    { lat: -26.2041, lng: 28.0473, continent: 'Africa', pays: 'South Africa', ville: 'Johannesburg' },
    { lat: -1.2921, lng: 36.8219, continent: 'Africa', pays: 'Kenya', ville: 'Nairobi' },
    { lat: 15.3875, lng: 30.4328, continent: 'Africa', pays: 'Sudan', ville: 'Khartoum' },
    { lat: 3.8480, lng: 11.5021, continent: 'Africa', pays: 'Cameroon', ville: 'Yaounde' },
    { lat: -6.7698, lng: 39.2433, continent: 'Africa', pays: 'Tanzania', ville: 'Dar es Salaam' },
    { lat: 9.0579, lng: 7.4951, continent: 'Africa', pays: 'Nigeria', ville: 'Abuja' },
    { lat: -12.0347, lng: -77.0428, continent: 'Africa', pays: 'Angola', ville: 'Luanda' },
    { lat: 5.6037, lng: -0.1870, continent: 'Africa', pays: 'Ghana', ville: 'Accra' },

    //STRASBOURG
    { lat: 48.74630193065651, lng: 7.692093683703394, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat: 48.58563052598115, lng: 7.736178450791364, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat: 48.58012066438492, lng: 7.7393200549380605, continent: 'Europe', pays: 'Frane', ville: 'Strasbourg' },
    { lat:48.58247040902132, lng: 7.749027139927568, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat:48.582825873348085, lng: 7.742764579207488, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat:48.58328614024992, lng: 7.739012628045559, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat:48.584244654235285, lng: 7.735595674195084, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat:48.580682561093894, lng: 7.753196371917323, continent: 'Europe', pays: 'Franc', ville: 'Strasbourg' },
    { lat:48.59215613131941, lng:  7.7746447894935296, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },
    { lat:48.585897395609976, lng: 7.759588073734454, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },
    { lat:48.58346901065052, lng: 7.74592152774051, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' },
    { lat:48.57322967682904, lng:7.7501437900684165, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },
    { lat:48.56882415061556, lng:7.7519275174212705, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },
    { lat:48.56577518852017, lng: 7.759231747120137, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },
    { lat:48.56816253918212, lng: 7.7690209785469735, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' },
    { lat:48.572801442289446, lng: 7.760167800721944, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },
    { lat:48.5558690454196, lng: 7.691041365842399, continent: 'Europe', pays: 'Frane', ville: 'Strasbourg' },
    { lat:48.5872434114852, lng: 7.7537775199893595, continent: 'Europe', pays: 'France', ville: 'Strasbourg' },
    { lat: 48.584614, lng: 7.748193, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Cathédrale Notre-Dame
    { lat: 48.579636, lng: 7.738998, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Petite France
    { lat: 48.582177, lng: 7.746529, continent: 'Europe', pays: 'rance', ville: 'Strasbourg' }, // Place Kléber
    { lat: 48.580108, lng: 7.744574, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' }, // Ponts Couverts
    { lat: 48.579072, lng: 7.748400, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Barrage Vauban
    { lat: 48.586120, lng: 7.750735, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Parc de l'Orangerie
    { lat: 48.579691, lng: 7.757208, continent: 'Europe', pays: 'rance', ville: 'Strasbourg' }, // Palais Rohan
    { lat: 48.584465, lng: 7.761538, continent: 'Europe', pays: 'Frane', ville: 'Strasbourg' }, // Parlement Européen
    { lat: 48.576161, lng: 7.735559, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' }, // Église Saint-Thomas
    { lat: 48.576875, lng: 7.752220, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place Gutenberg
    { lat: 48.571779, lng: 7.753533, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Musée d'Art Moderne
    { lat: 48.585213, lng: 7.746639, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place Broglie
    { lat: 48.572322, lng: 7.751646, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Pont d’Auvergne
    { lat: 48.577570, lng: 7.754101, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place de la République
    { lat: 48.577256, lng: 7.747389, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Quai des Bateliers
    { lat: 48.579872, lng: 7.752244, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Musée Alsacien
    { lat: 48.573715, lng: 7.756268, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place d'Austerlitz
    { lat: 48.578313, lng: 7.749805, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Quai Saint-Nicolas
    { lat: 48.582152, lng: 7.746304, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Rue des Grandes Arcades
    { lat: 48.588382, lng: 7.749212, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' },  // Jardin Botanique
    { lat: 48.588134, lng: 7.748559, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Pont du Corbeau
    { lat: 48.581032, lng: 7.750836, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place de l'Hôtel de Ville
    { lat: 48.578933, lng: 7.744290, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place d'Austerlitz
    { lat: 48.585424, lng: 7.741559, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Parc de l’Hotel de Ville
    { lat: 48.584214, lng: 7.745607, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Rue du Dôme
    { lat: 48.582448, lng: 7.745049, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Rue de la Mésange
    { lat: 48.585183, lng: 7.740234, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Musée Archéologique
    { lat: 48.586791, lng: 7.747819, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place des Halles
    { lat: 48.590062, lng: 7.756838, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Esplanade
    { lat: 48.585842, lng: 7.757742, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Centre Commercial Rivétoile
    { lat: 48.579926, lng: 7.752715, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place de la République
    { lat: 48.574962, lng: 7.752110, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Square Louise Weiss
    { lat: 48.585052, lng: 7.738434, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Rue de la 1ère Armée
    { lat: 48.589432, lng: 7.752692, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Boulevard de la Victoire
    { lat: 48.584039, lng: 7.758127, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Quai du Woerthel
    { lat: 48.582639, lng: 7.759382, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Place des Tripiers
    { lat: 48.588844, lng: 7.746574, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Marché de Noël Strasbourg
    { lat: 48.581674, lng: 7.745877, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Rue des Francs-Bourgeois
    { lat: 48.583112, lng: 7.738383, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Place du Marché Gayot
    { lat: 48.580508, lng: 7.752946, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Palais de la Musique et des Congrès
    { lat: 48.577441, lng: 7.748774, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Hôtel Régent Petite France
    { lat: 48.585473, lng: 7.759672, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Maison Kammerzell
    { lat: 48.584045, lng: 7.741801, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Place de la Gare
    { lat: 48.588293, lng: 7.747337, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Parc du Contades
    { lat: 48.587916, lng: 7.743309, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Place Kléber
    { lat: 48.584682, lng: 7.743163, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Rue des Juifs
    { lat: 48.589276, lng: 7.743889, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Pont de l’Europe
    { lat: 48.589635, lng: 7.753814, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Bibliothèque Nationale et Universitaire
    { lat: 48.587307, lng: 7.744703, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Square du Général Leclerc
    { lat: 48.581527, lng: 7.745692, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Hôtel de Ville de Strasbourg
    { lat: 48.576042, lng: 7.744688, continent: 'Europe', pays: 'Frane', ville: 'Strasbourg' }, // Parc de l’Esplanade
    { lat: 48.585108, lng: 7.749412, continent: 'Europe', pays: 'Frane', ville: 'Strasbourg' }, // Place des Halles
    { lat: 48.586728, lng: 7.741781, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' }, // Boulevard de la Marne
    { lat: 48.578084, lng: 7.743287, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Hôtel Cour du Corbeau
    { lat: 48.589480, lng: 7.747562, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Quartier de la Krutenau
    { lat: 48.573722, lng: 7.753804, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' }, // Gare de Strasbourg
    { lat: 48.588238, lng: 7.748834, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Pont des Misérables
    { lat: 48.575254, lng: 7.738761, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Place des Halles
    { lat: 48.586249, lng: 7.749578, continent: 'Europe', pays: 'rance', ville: 'Strasbourg' }, // Parc de l’Orangerie
    { lat: 48.588267, lng: 7.758006, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' }, // Place de l’Étoile
    { lat: 48.577047, lng: 7.749031, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Rue des Juifs
    { lat: 48.576827, lng: 7.754905, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Square de l’Opéra
    { lat: 48.579843, lng: 7.740819, continent: 'Europe', pays: 'Frane', ville: 'Strasbourg' }, // Place Gutenberg
    { lat: 48.582418, lng: 7.755469, continent: 'Europe', pays: 'Frace', ville: 'Strasbourg' }, // Rue de la Mairie
    { lat: 48.589377, lng: 7.740607, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Parc de l’Hotel de Ville
    { lat: 48.586649, lng: 7.757557, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Cité de la Musique et de la Danse
    { lat: 48.586013, lng: 7.738981, continent: 'Europe', pays: 'Frnce', ville: 'Strasbourg' }, // Bibliothèque nationale et universitaire
    { lat: 48.583030, lng: 7.752221, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Place de l’Université
    { lat: 48.589227, lng: 7.755235, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Parc du Contades
    { lat: 48.574329, lng: 7.753062, continent: 'Europe', pays: 'Fance', ville: 'Strasbourg' }, // Maison Kammerzell

    //capitales
    { lat: 48.8571176130146, lng: 2.2953320109276265, continent: 'Europe', pays: 'Frnce', ville: 'Paris', mode: 'Capitales', place: "Tour Eiffel" },
    { lat: 41.902782, lng: 12.496365, continent: 'Europe', pays: 'Italie', ville: 'Rome', mode: 'Capitales', place: "Colisée" },
    { lat: 51.507351, lng: -0.127758, continent: 'Europe', pays: 'Royaume-Uni', ville: 'Londres', mode: 'Capitales', place: "Big Ben" },
    { lat: 52.520007, lng: 13.404954, continent: 'Europe', pays: 'Allemagne', ville: 'Berlin', mode: 'Capitales', place: "Brandenburger Tor" },
    { lat: 40.416775, lng: -3.703790, continent: 'Europe', pays: 'Espagne', ville: 'Madrid', mode: 'Capitales', place: "Palacio Real" },
    { lat: 48.208176, lng: 16.373819, continent: 'Europe', pays: 'Autriche', ville: 'Vienne', mode: 'Capitales', place: "Stephansdom" },
    { lat: 50.075538, lng: 14.437800, continent: 'Europe', pays: 'République Tchèque', ville: 'Prague', mode: 'Capitales', place: "Pont Charles" },
    { lat: 59.329323, lng: 18.068581, continent: 'Europe', pays: 'Suède', ville: 'Stockholm', mode: 'Capitales', place: "Gamla Stan" },
    { lat: 60.169856, lng: 24.938379, continent: 'Europe', pays: 'Finlande', ville: 'Helsinki', mode: 'Capitales', place: "Cathédrale d'Helsinki" },
    { lat: 55.755825, lng: 37.617298, continent: 'Europe', pays: 'Russie', ville: 'Moscou', mode: 'Capitales', place: "Place Rouge" },
    { lat: 35.689487, lng: 139.691711, continent: 'Europe', pays: 'Grèce', ville: 'Athènes', mode: 'Capitales', place: "Acropole" },
    { lat: 42.697708, lng: 23.321867, continent: 'Europe', pays: 'Bulgarie', ville: 'Sofia', mode: 'Capitales', place: "Cathédrale Alexandre Nevski" },
    { lat: 50.850340, lng: 4.351710, continent: 'Europe', pays: 'Belgique', ville: 'Bruxelles', mode: 'Capitales', place: "Grand-Place" },
    { lat: 55.676098, lng: 12.568337, continent: 'Europe', pays: 'Danemark', ville: 'Copenhague', mode: 'Capitales', place: "Nyhavn" },
    { lat: 59.436961, lng: 24.753575, continent: 'Europe', pays: 'Estonie', ville: 'Tallinn', mode: 'Capitales', place: "Vieille Ville" },
    { lat: 54.687157, lng: 25.279652, continent: 'Europe', pays: 'Lituanie', ville: 'Vilnius', mode: 'Capitales', place: "Cathédrale de Vilnius" },
    { lat: 56.949648, lng: 24.105186, continent: 'Europe', pays: 'Lettonie', ville: 'Riga', mode: 'Capitales', place: "Place du Dôme" },
    { lat: 47.497913, lng: 19.040236, continent: 'Europe', pays: 'Hongrie', ville: 'Budapest', mode: 'Capitales', place: "Bastion des pêcheurs" },
    { lat: 44.817844, lng: 20.456891, continent: 'Europe', pays: 'Serbie', ville: 'Belgrade', mode: 'Capitales', place: "Kalemegdan" },
    { lat: 45.815011, lng: 15.981919, continent: 'Europe', pays: 'Croatie', ville: 'Zagreb', mode: 'Capitales', place: "Place Ban Jelačić" },
    { lat: 46.056947, lng: 14.505751, continent: 'Europe', pays: 'Slovénie', ville: 'Ljubljana', mode: 'Capitales', place: "Pont des dragons" },
    { lat: 48.148596, lng: 17.107748, continent: 'Europe', pays: 'Slovaquie', ville: 'Bratislava', mode: 'Capitales', place: "Château de Bratislava" },
    { lat: 41.998129, lng: 21.425435, continent: 'Europe', pays: 'Macédoine du Nord', ville: 'Skopje', mode: 'Capitales', place: "Pont de Pierre" },
    { lat: 47.162494, lng: 27.588834, continent: 'Europe', pays: 'Roumanie', ville: 'Bucarest', mode: 'Capitales', place: "Palais du Parlement" },
    { lat: 42.360253, lng: 19.259364, continent: 'Europe', pays: 'Monténégro', ville: 'Podgorica', mode: 'Capitales', place: "Pont du Millenium" },
    { lat: 41.327545, lng: 19.818889, continent: 'Europe', pays: 'Albanie', ville: 'Tirana', mode: 'Capitales', place: "Place Skanderbeg" },
    { lat: 42.662914, lng: 21.165503, continent: 'Europe', pays: 'Kosovo', ville: 'Pristina', mode: 'Capitales', place: "Bibliothèque nationale" },
    { lat: 43.856259, lng: 18.413076, continent: 'Europe', pays: 'Bosnie-Herzégovine', ville: 'Sarajevo', mode: 'Capitales', place: "Baščaršija" },
    { lat: 39.074208, lng: 21.824312, continent: 'Europe', pays: 'Grèce', ville: 'Athènes', mode: 'Capitales', place: "Acropole" },
    { lat: 19.432608, lng: -99.133209, continent: 'Amérique du Nord', pays: 'Mexique', ville: 'Mexico', mode: 'Capitales', place: "Zócalo" },
    { lat: 38.907192, lng: -77.036871, continent: 'Amérique du Nord', pays: 'États-Unis', ville: 'Washington D.C.', mode: 'Capitales', place: "Capitole des États-Unis" },
    { lat: 45.421530, lng: -75.697193, continent: 'Amérique du Nord', pays: 'Canada', ville: 'Ottawa', mode: 'Capitales', place: "Parlement du Canada" },
    { lat: 13.693822, lng: -89.218191, continent: 'Amérique centrale', pays: 'El Salvador', ville: 'San Salvador', mode: 'Capitales', place: "Monumento al Salvador del Mundo" },
    { lat: 14.634915, lng: -90.506882, continent: 'Amérique centrale', pays: 'Guatemala', ville: 'Guatemala City', mode: 'Capitales', place: "Catedral Metropolitana" },
    { lat: 8.983333, lng: -79.516667, continent: 'Amérique centrale', pays: 'Panama', ville: 'Panama City', mode: 'Capitales', place: "Canal de Panama" },
    { lat: 17.977174, lng: -66.950658, continent: 'Caribbean', pays: 'Porto Rico', ville: 'San Juan', mode: 'Capitales', place: "Vieille ville de San Juan" },
    { lat: 4.614507, lng: -74.072092, continent: 'Amérique du Sud', pays: 'Colombie', ville: 'Bogotá', mode: 'Capitales', place: "Plaza de Bolívar" },
    { lat: -34.603684, lng: -58.381559, continent: 'Amérique du Sud', pays: 'Argentine', ville: 'Buenos Aires', mode: 'Capitales', place: "Obélisque" },
    { lat: -23.550520, lng: -46.633308, continent: 'Amérique du Sud', pays: 'Brésil', ville: 'Brasília', mode: 'Capitales', place: "Congrès National du Brésil" },
    { lat: -12.046374, lng: -77.042793, continent: 'Amérique du Sud', pays: 'Pérou', ville: 'Lima', mode: 'Capitales', place: "Plaza Mayor de Lima" },
    { lat: 10.491016, lng: -66.897196, continent: 'Amérique du Sud', pays: 'Venezuela', ville: 'Caracas', mode: 'Capitales', place: "Paseo Los Próceres" },
    { lat: -33.448889, lng: -70.669265, continent: 'Amérique du Sud', pays: 'Chili', ville: 'Santiago', mode: 'Capitales', place: "Cerro San Cristóbal" },
    { lat: -34.901112, lng: -56.164531, continent: 'Amérique du Sud', pays: 'Uruguay', ville: 'Montevideo', mode: 'Capitales', place: "Plaza Independencia" },
    { lat: 12.024206, lng: -77.028261, continent: 'Amérique du Sud', pays: 'Équateur', ville: 'Quito', mode: 'Capitales', place: "Place de l'Indépendance" },
    { lat: 18.486057, lng: -66.191529, continent: 'Caribbean', pays: 'Porto Rico', ville: 'San Juan', mode: 'Capitales', place: "El Morro" },
    { lat: -34.603684, lng: -58.381559, continent: 'Amérique du Sud', pays: 'Argentine', ville: 'Buenos Aires', mode: 'Capitales', place: "La Boca" },
    { lat: 2.993408, lng: -60.365015, continent: 'Amérique du Sud', pays: 'Guyane', ville: 'Georgetown', mode: 'Capitales', place: "Fort Zeelandia" },
    { lat: -13.489050, lng: -69.684761, continent: 'Amérique du Sud', pays: 'Bolivie', ville: 'La Paz', mode: 'Capitales', place: "Plaza Murillo" },
    { lat: 39.904202, lng: 116.407394, continent: 'Asie', pays: 'Chine', ville: 'Pékin', mode: 'Capitales', place: "Place Tian'anmen" },
    { lat: 28.704060, lng: 77.102493, continent: 'Asie', pays: 'Inde', ville: 'New Delhi', mode: 'Capitales', place: "India Gate" },
    { lat: 1.352083, lng: 103.819836, continent: 'Asie', pays: 'Singapour', ville: 'Singapour', mode: 'Capitales', place: "Marina Bay Sands" },
    { lat: 55.755825, lng: 37.617298, continent: 'Asie', pays: 'Russie', ville: 'Moscou', mode: 'Capitales', place: "Kremlin" },
    { lat: 35.676192, lng: 139.650311, continent: 'Asie', pays: 'Japon', ville: 'Tokyo', mode: 'Capitales', place: "Shibuya Crossing" },
    { lat: 13.410530, lng: 103.866986, continent: 'Asie', pays: 'Cambodge', ville: 'Phnom Penh', mode: 'Capitales', place: "Palais Royal" },
    { lat: 15.087271, lng: 145.712982, continent: 'Asie', pays: 'Guam', ville: 'Hagåtña', mode: 'Capitales', place: "Plaza de España" },
    { lat: 4.508333, lng: 73.535333, continent: 'Asie', pays: 'Maldives', ville: 'Malé', mode: 'Capitales', place: "Hukuru Miskiy" },
    { lat: -6.175110, lng: 106.865036, continent: 'Asie', pays: 'Indonésie', ville: 'Jakarta', mode: 'Capitales', place: "Monas" },
    { lat: 10.823099, lng: 106.629662, continent: 'Asie', pays: 'Vietnam', ville: 'Hô Chi Minh-Ville', mode: 'Capitales', place: "Saigon Notre-Dame Basilica" },
    { lat: 39.739235, lng: 121.295539, continent: 'Asie', pays: 'Corée du Sud', ville: 'Séoul', mode: 'Capitales', place: "Palais Gyeongbokgung" },
    { lat: -35.280937, lng: 149.130009, continent: 'Océanie', pays: 'Australie', ville: 'Canberra', mode: 'Capitales', place: "Parliament House" },
    { lat: -41.286460, lng: 174.776236, continent: 'Océanie', pays: 'Nouvelle-Zélande', ville: 'Wellington', mode: 'Capitales', place: "Te Papa Museum" },
    { lat: 5.852031, lng: 160.017603, continent: 'Océanie', pays: 'Micronésie', ville: 'Palikir', mode: 'Capitales', place: "Palikir" },
    { lat: -21.121734, lng: -175.200227, continent: 'Océanie', pays: 'Tonga', ville: 'Nukuʻalofa', mode: 'Capitales', place: "Royal Palace" },
    { lat: 9.072264, lng: 7.495083, continent: 'Afrique', pays: 'Niger', ville: 'Niamey', mode: 'Capitales', place: "Place de la Concertation" },
    { lat: 36.752778, lng: 3.042222, continent: 'Afrique', pays: 'Algérie', ville: 'Alger', mode: 'Capitales', place: "Place Maurice Audin" },
    { lat: 12.63923, lng: 32.619167, continent: 'Afrique', pays: 'Soudan', ville: 'Khartoum', mode: 'Capitales', place: "Le Nil Blanc et le Nil Bleu" },
    { lat: 30.044419, lng: 31.235711, continent: 'Afrique', pays: 'Égypte', ville: 'Le Caire', mode: 'Capitales', place: "Pyramides de Gizeh" },
    { lat: -1.286389, lng: 36.817223, continent: 'Afrique', pays: 'Kenya', ville: 'Nairobi', mode: 'Capitales', place: "Nairobi National Park" },
    { lat: 9.05785, lng: 7.49508, continent: 'Afrique', pays: 'Nigeria', ville: 'Abuja', mode: 'Capitales', place: "National Mosque" },
    { lat: 36.138263, lng: 43.104218, continent: 'Moyen-Orient', pays: 'Irak', ville: 'Bagdad', mode: 'Capitales', place: "Place Tahrir" },
    { lat: 31.768319, lng: 35.21371, continent: 'Moyen-Orient', pays: 'Israël', ville: 'Jérusalem', mode: 'Capitales', place: "Mur des Lamentations" },
    { lat: 33.6844, lng: 73.0479, continent: 'Moyen-Orient', pays: 'Pakistan', ville: 'Islamabad', mode: 'Capitales', place: "Faisal Mosque" },
    { lat: 33.8486, lng: 35.4945, continent: 'Moyen-Orient', pays: 'Liban', ville: 'Beyrouth', mode: 'Capitales', place: "Corniche de Beyrouth" },
    { lat: 25.276987, lng: 55.296249, continent: 'Moyen-Orient', pays: 'Émirats Arabes Unis', ville: 'Abou Dabi', mode: 'Capitales', place: "Grande Mosquée Sheikh Zayed" },
    { lat: 31.950527, lng: 35.066256, continent: 'Moyen-Orient', pays: 'Jordanie', ville: 'Amman', mode: 'Capitales', place: "Citadelle d'Amman" },
    { lat: 40.712776, lng: -74.005974, continent: 'Moyen-Orient', pays: 'Koweït', ville: 'Koweït', mode: 'Capitales', place: "Kuwait Towers" },
    { lat: -12.639232, lng: 28.738335, continent: 'Afrique', pays: 'Zambie', ville: 'Lusaka', mode: 'Capitales', place: "Manda Hill Mall" },
    { lat: -4.038333, lng: 15.302241, continent: 'Afrique', pays: 'République Démocratique du Congo', ville: 'Kinshasa', mode: 'Capitales', place: "Place de l'Indépendance" },
    { lat: 9.05785, lng: 7.49508, continent: 'Afrique', pays: 'Sierra Leone', ville: 'Freetown', mode: 'Capitales', place: "Lumley Beach" },
    { lat: 19.020833, lng: 47.9297, continent: 'Afrique', pays: 'Bénin', ville: 'Porto-Novo', mode: 'Capitales', place: "Parc de la Marina" },



    //LIEUX CONNUS
    { lat: 48.581577875959375, lng: 7.750135491676123, continent: 'Europe', pays: 'France', ville: 'Strasbourg', mode: 'famous', place: "Cathédrale de Strasbourg" },
    { lat: 49.25458769560739, lng: 4.0351197101940235, continent: 'Europe', pays: 'France', ville: 'Reims', mode: 'famous', place: "Cathédrale de Reims" },
    { lat: 48.8571176130146, lng: 2.2953320109276265, continent: 'Europe', pays: 'France', ville: 'Paris', mode: 'famous', place: "Tour Eiffel" },
    { lat: 48.861942564979444, lng: 2.3346985046579403, continent: 'Europe', pays: 'France', ville: 'Paris', mode: 'famous', place: "Pyramide du Louvre" },
    { lat: 48.85272242726784, lng: 2.3485357610830757, continent: 'Europe', pays: 'France', ville: 'Paris', mode: 'famous', place: "Notre Dame de Paris" },
    { lat: 48.8668879533075, lng: 2.3294993617472644, continent: 'Europe', pays: 'France', ville: 'Paris', mode: 'famous', place: "Place Vendôme" },
    { lat: 48.92431959243519, lng: 2.362562404954632, continent: 'Europe', pays: 'France', ville: 'Paris', mode: 'famous', place: "Stade de France" },
    { lat: 48.87318472885632, lng: 2.2953708055406223, continent: 'Europe', pays: 'France', ville: 'Paris', mode: 'famous', place: "Arc de Triomphe" },
    { lat: 48.632681883510635, lng: -1.509443288823734, continent: 'Europe', pays: 'France', ville: 'Le Mont-Saint-Michel', mode: 'famous', place: "Mont Saint-Michel" },
    { lat: 43.29450047339565, lng: 5.363692106819324, continent: 'Europe', pays: 'France', ville: 'Marseille', mode: 'famous', place: "Port de Marseille" },
    { lat: 48.803856406550715, lng: 2.123866518592768, continent: 'Europe', pays: 'France', ville: 'Versailles', mode: 'famous', place: "Château de Versailles" },
    { lat: 43.210343773082386, lng: 2.358611906840818, continent: 'Europe', pays: 'France', ville: 'Carcassonne', mode: 'famous', place: "Cité Médiévale de Carcassonne" },
    { lat: 47.616622432909814, lng: 1.5165069208518343, continent: 'Europe', pays: 'France', ville: 'Chambord', mode: 'famous', place: "Château de Chambord" },
    { lat: 43.94723300826707, lng: 4.53476171771074, continent: 'Europe', pays: 'France', ville: 'Vers-Pont-du-Gard', mode: 'famous', place: "Pont du Gard" },
    { lat: 40.79722752877516, lng: -73.95004661117925, continent: 'North America', pays: 'USA', ville: 'New York', mode: 'famous', place: "Central Park" },
    { lat: 43.080750766610656, lng: -79.07840320965927, continent: 'North America', pays: 'USA', ville: 'Niagara Falls', mode: 'famous', place: "Chutes du Niagara" },
    { lat: 40.69034205584641, lng: -74.04549005894877, continent: 'North America', pays: 'USA', ville: 'New York', mode: 'famous', place: "Statue of Liberty" },
    { lat: 40.75781654732094, lng: -73.98568249307924, continent: 'North America', pays: 'USA', ville: 'New York', mode: 'famous', place: "Times Square" },
    { lat: 40.74845502151458, lng: -73.98456228099235, continent: 'North America', pays: 'USA', ville: 'New York', mode: 'famous', place: "Empire State Building" },
    { lat: 37.851793169906585, lng: -119.57291960411746, continent: 'North America', pays: 'USA', ville: 'California', mode: 'famous', place: "Yosemite National Park" },
    { lat: 44.42847710721062, lng: -110.583369356037, continent: 'North America', pays: 'USA', ville: 'Yellowstone', mode: 'famous', place: "Yellowstone National Park" },
    { lat: 43.87850436129087, lng: -103.45777299579551, continent: 'North America', pays: 'USA', ville: 'Keystone', mode: 'famous', place: "Mount Rushmore" },
    { lat: 36.061651913170465, lng: -112.10796826564248, continent: 'North America', pays: 'USA', ville: 'Arizona', mode: 'famous', place: "Grand Canyon" },
    { lat: 47.62000695641677, lng: -122.34915784877099, continent: 'North America', pays: 'USA', ville: 'Seattle', mode: 'famous', place: "Space Needle" },
    { lat: 34.13649077648881, lng: -118.35595584844039, continent: 'North America', pays: 'USA', ville: 'Los Angeles', mode: 'famous', place: "Universal Studios Hollywood" },
    { lat: 33.81188504585551, lng: -117.91897768968265, continent: 'North America', pays: 'USA', ville: 'Orlando', mode: 'famous', place: "Disneyland Florida" },
    { lat: 41.89058335598132,  lng: 12.49445481534246, continent: 'Europe', pays: 'Italy', ville: 'Rome', mode: 'famous', place: "Colosseum" },
    { lat: 27.172472887856514, lng: 78.04231990826052, continent: 'Asia', pays: 'India', ville: 'Agra', mode: 'famous', place: "Taj Mahal" },
    { lat: 40.70319237103744, lng: -73.99586058459737, continent: 'North America', pays: 'USA', ville: 'New York', mode: 'famous', place: "Brooklyn Bridge" },
    { lat: 38.8972744953295, lng: -77.03703383998528, continent: 'North America', pays: 'USA', ville: 'Washington D.C.', mode: 'famous', place: "Maison Blanche" },
    { lat: 51.50114583041222,  lng: -0.12418038756444674, continent: 'Europe', pays: 'United Kingdom', ville: 'London', mode: 'famous', place: "Big Ben" },
    { lat: -22.952097425746654, lng: -43.210496238740575, continent: 'South America', pays: 'Brazil', ville: 'Rio de Janeiro', mode: 'famous', place: "Christ the Redeemer" },
    { lat: -13.162770429161524,  lng: -72.54535868408266, continent: 'South America', pays: 'Peru', ville: 'Machu Picchu', mode: 'famous', place: "Machu Picchu" },
    { lat: 39.917017600627545, lng: 116.3970797690515, continent: 'Asia', pays: 'China', ville: 'Beijing', mode: 'famous', place: "Cité Interdite" },
    { lat: 29.977847663827493, lng: 31.13040863396365, continent: 'Africa', pays: 'Egypt', ville: 'Giza', mode: 'famous', place: "Pyramide de Gizeh" },
    { lat: 25.198327579730428, lng: 55.272829574473796, continent: 'Asia', pays: 'UAE', ville: 'Dubai', mode: 'famous', place: "Burj Khalifa" },
    { lat: -33.85967002761163, lng: 151.2214707003714, continent: 'Oceania', pays: 'Australia', ville: 'Sydney', mode: 'famous', place: "Opera de Sydney" },
    { lat: -25.344492987791575, lng: 131.00991559520853, continent: 'Oceania', pays: 'Australia', ville: 'Uluru', mode: 'famous', place: "Uluru" },
    { lat: -38.6644142595623, lng: 143.10392124681945, continent: 'Oceania', pays: 'Australia', ville: 'Victoria', mode: 'famous', place: "Twelve Apostles" },
    { lat: -38.3575332891659, lng: 176.36769805427483, continent: 'Oceania', pays: 'New Zealand', ville: 'Rotorua', mode: 'famous', place: "Wai-O-Tapu Thermal Wonderland" },
    { lat: 34.686854348541324, lng: 135.52594901042116, continent: 'Asia', pays: 'Japan', ville: 'Osaka', mode: 'famous', place: "Château d'Osaka" },
    { lat: 13.75045740716209, lng:  100.49136997013052, continent: 'Asia', pays: 'Thailand', ville: 'Bangkok', mode: 'famous', place: "The Grand Palace" },
    { lat: 13.743614537666344, lng:  100.48821187633047, continent: 'Asia', pays: 'Thailand', ville: 'Bangkok', mode: 'famous', place: "Wat Arun" },
    { lat: 14.357872095299143, lng: 100.56756448866372, continent: 'Asia', pays: 'Thailand', ville: 'Ayutthaya', mode: 'famous', place: "Ayutthaya" },
    { lat: 19.824500959798083,  lng: 99.76343986851529, continent: 'Asia', pays: 'Thailand', ville: 'Chiang Rai', mode: 'famous', place: "Chite Temple" },
    { lat: 55.751151344279634, lng: 37.61779590075653, continent: 'Europe', pays: 'Russia', ville: 'Moscow', mode: 'famous', place: "Kremlin" },
    { lat: 59.94071058362437, lng:  30.328308313575725, continent: 'Europe', pays: 'Russia', ville: 'Saint Petersburg', mode: 'famous', place: "Cathédrale Saint-Sauveur-sur-le-Sang-Versé" },
    { lat: 45.43092417299675, lng:  12.336975717918746, continent: 'Europe', pays: 'Italy', ville: 'Venice', mode: 'famous', place: "Venise" },
    { lat: 43.7230958282067,  lng: 10.397553446946208, continent: 'Europe', pays: 'Italy', ville: 'Pisa', mode: 'famous', place: "Tour de Pise" },
    { lat: 41.902280814585474, lng: 12.458601111028436, continent: 'Europe', pays: 'Vatican City', ville: 'Vatican', mode: 'famous', place: "Basilique Saint-Pierre" },
    { lat: 48.208278337630034,  lng: 16.374015266894844, continent: 'Europe', pays: 'Austria', ville: 'Vienna', mode: 'famous', place: "Cathédrale St-Etienne de Vienne" },
    { lat: 48.207238506193036, lng: 16.362501675705634, continent: 'Europe', pays: 'Austria', ville: 'Vienna', mode: 'famous', place: "Hofburg" },
    { lat: 47.55787385252782, lng: 10.750486796491668, continent: 'Europe', pays: 'Germany', ville: 'Schwangau', mode: 'famous', place: "Château de Neuschwanstein" },
    { lat: 48.217502508692625, lng:  11.627317172224227, continent: 'Europe', pays: 'Germany', ville: 'Munich', mode: 'famous', place: "Allianz Arena Munich" },
    { lat: 48.13735993642845, lng: 11.574901044046728, continent: 'Europe', pays: 'Germany', ville: 'Munich', mode: 'famous', place: "Marienplatz" },
    { lat: 52.514672252835695, lng: 13.378723663885477, continent: 'Europe', pays: 'Germany', ville: 'Berlin', mode: 'famous', place: "Mémorial aux Juifs Assassinés d'Europe" },
    { lat: 52.51657059196804, lng: 13.376837732801087, continent: 'Europe', pays: 'Germany', ville: 'Berlin', mode: 'famous', place: "Porte de Brandebourg" },
    { lat: 31.626112361869072,  lng: -7.988466676812106, continent: 'Africa', pays: 'Morocco', ville: 'Marrakech', mode: 'famous', place: "Place Jemaa El Fna" },
    { lat: -25.69163525984715, lng: -54.43799675097935, continent: 'South America', pays: 'Argentina/Brazil', ville: 'Iguazu Falls', mode: 'famous', place: "Chutes d'Iguazu" },
    { lat: -41.071922314104654, lng: -71.52238250880717, continent: 'South America', pays: 'Argentina', ville: 'San Carlos de Bariloche', mode: 'famous', place: "San Carlos de Bariloche" },
    { lat: -50.46661677492997, lng: -73.03344986563833, continent: 'South America', pays: 'Argentina', ville: 'El Calafate', mode: 'famous', place: "Glacier Perito Moreno" },
    { lat: 20.683498295552724, lng: -88.56875890724092, continent: 'North America', pays: 'Mexico', ville: 'Chichen Itza', mode: 'famous', place: "Chichen Itza" },
    { lat: 17.48497968295585,  lng: -92.04637003606567, continent: 'North America', pays: 'Mexico', ville: 'Palenque', mode: 'famous', place: "Palenque" },
    { lat: 19.692069839647935,  lng: -98.84244154993199, continent: 'North America', pays: 'Mexico', ville: 'Teotihuacan', mode: 'famous', place: "Teotihuacan" },
    { lat: 19.433353915489853,  lng: -99.13292049411068, continent: 'North America', pays: 'Mexico', ville: 'Mexico City', mode: 'famous', place: "Cathédrale Métropolitaine de Mexico" },
    { lat: 27.175144, lng: 78.042142, continent: 'Asia', pays: 'India', ville: 'Agra', mode: 'famous', place: 'Taj Mahal' },
    { lat: 35.6895, lng: 139.6917, continent: 'Asia', pays: 'Japan', ville: 'Tokyo', mode: 'famous', place: 'Tokyo Tower' },
    { lat: 1.3521, lng: 103.8198, continent: 'Asia', pays: 'Singapore', ville: 'Singapore', mode: 'famous', place: 'Marina Bay Sands' },
    { lat: 31.2304, lng: 121.4737, continent: 'Asia', pays: 'China', ville: 'Shanghai', mode: 'famous', place: 'The Bund' },
    { lat: 14.0583, lng: 108.2772, continent: 'Asia', pays: 'Vietnam', ville: 'Hanoi', mode: 'famous', place: 'Halong Bay' },
    { lat: 34.0522, lng: 108.9470, continent: 'Asia', pays: 'China', ville: 'Xi\'an', mode: 'famous', place: 'Terracotta Army' },
    { lat: 13.4125, lng: 103.8667, continent: 'Asia', pays: 'Cambodia', ville: 'Siem Reap', mode: 'famous', place: 'Angkor Wat' },
    { lat: 25.276987, lng: 55.296249, continent: 'Asia', pays: 'United Arab Emirates', ville: 'Dubai', mode: 'famous', place: 'Burj Khalifa' },
    { lat: 13.7367, lng: 100.5231, continent: 'Asia', pays: 'Thailand', ville: 'Bangkok', mode: 'famous', place: 'Grand Palace' },
    { lat: 27.9881, lng: 86.9250, continent: 'Asia', pays: 'Nepal', ville: 'Kathmandu', mode: 'famous', place: 'Mount Everest' },
    { lat: 15.8700, lng: 100.9925, continent: 'Asia', pays: 'Laos', ville: 'Vientiane', mode: 'famous', place: 'Pha That Luang' },
    { lat: 22.3964, lng: 114.1095, continent: 'Asia', pays: 'China', ville: 'Hong Kong', mode: 'famous', place: 'Victoria Peak' },
    { lat: 21.0285, lng: 105.8542, continent: 'Asia', pays: 'Vietnam', ville: 'Hanoi', mode: 'famous', place: 'Hoan Kiem Lake' },
    { lat: 28.6139, lng: 77.2090, continent: 'Asia', pays: 'India', ville: 'New Delhi', mode: 'famous', place: 'India Gate' },
    { lat: 20.5937, lng: 78.9629, continent: 'Asia', pays: 'India', ville: 'Mumbai', mode: 'famous', place: 'Gateway of India' },
    { lat: 19.4326, lng: -99.1332, continent: 'Asia', pays: 'Mexico', ville: 'Mexico City', mode: 'famous', place: 'Chapultepec Castle' },
    { lat: 7.0158, lng: 100.4577, continent: 'Asia', pays: 'Thailand', ville: 'Koh Phi Phi', mode: 'famous', place: 'Maya Bay' },
    { lat: 8.9824, lng: 38.7578, continent: 'Asia', pays: 'Ethiopia', ville: 'Lalibela', mode: 'famous', place: 'Rock-Hewn Churches of Lalibela' },
    { lat: 39.9042, lng: 116.4074, continent: 'Asia', pays: 'China', ville: 'Beijing', mode: 'famous', place: 'Great Wall of China' },
    { lat: 5.4213, lng: 100.3303, continent: 'Asia', pays: 'Malaysia', ville: 'Penang', mode: 'famous', place: 'Penang Hill' },
    { lat: 41.40405290096904, lng: 2.1739003171142888, continent: 'Europe', pays: 'Espagne', ville: 'Barcelone', mode: 'famous', place: "Sagrada Familia" },
    { lat: 41.41354860332115, lng: 2.1529335237350296, continent: 'Europe', pays: 'Espagne', ville: 'Barcelone', mode: 'famous', place: "Parc Guell" },
    { lat: 41.14723735740758, lng: -8.640280460710152, continent: 'Europe', pays: 'Portugal', ville: 'Porto', mode: 'famous', place: "Ponte da Arrabida" },
    { lat: -16.514639937978984, lng: -151.75499250357709, continent: 'Océanie', pays: 'Polynésie', ville: 'Bora Bora', mode: 'famous', place: "Faanui" },
    { lat: -27.126505340466778, lng: -109.27849289008984, continent: 'Océanie', pays: 'Chile', ville: 'Ile de Paque', mode: 'famous', place: "Ile de Paque" },
    { lat: 29.552715135128807, lng: -95.09572691321462, continent: 'North America', pays: 'USA', ville: 'Houston', mode: 'famous', place: "Houston Space Center" },
    { lat: 36.1116972184772, lng: -115.17995581833272, continent: 'North America', pays: 'USA', ville: 'Las Vegas', mode: 'famous', place: "Bellagio Hotel" },
    { lat: 37.81011046004295, lng: -122.47644265964426, continent: 'North America', pays: 'USA', ville: 'San Francisco', mode: 'famous', place: "Golden Gate Bridge" },
    { lat: 34.101581793444026,  lng: -118.33997580089653, continent: 'North America', pays: 'USA', ville: 'Los Angeles', mode: 'famous', place: "Hollywood Boulevard" },
    { lat: 60.939151940787035,  lng: -46.14629563891027, continent: 'North America', pays: 'Groenland', ville: 'Narsaq', mode: 'famous', place: "Groenland" },
    { lat: 37.97167233493177, lng:  23.725965703730793, continent: 'Europe', pays: 'Grèce', ville: 'Athènes', mode: 'famous', place: "Acropole" },
    { lat: 37.971668345996655, lng:  23.72671539809174, continent: 'Europe', pays: 'Grèce', ville: 'Athènes', mode: 'famous', place: "Parthénon" },
    { lat: 52.36757279013168, lng:  4.893795043696823, continent: 'Europe', pays: 'Pays Bas', ville: 'Amsterdam', mode: 'famous', place: "Amsterdam" },
    { lat: 50.84689155669517, lng:  4.352344601707176, continent: 'Europe', pays: 'Belgique', ville: 'Bruxelles', mode: 'famous', place: "Hotel de ville de Bruxelles" },
    { lat: 51.51372999680392, lng:  -0.10036435807844586, continent: 'Europe', pays: 'Royaume-Unis', ville: 'Londres', mode: 'famous', place: "Cathedral Saint Paul" },

]
