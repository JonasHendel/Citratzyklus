export const description = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			return 'Die Citratsynthase katalysiert die Übertragung von Acetyl-CoA (C2 Verbindung) aufOxalacetat (C4 Verbindung) unter der Bildung von Citrat (C6 Verbindung). H2O wird eingeführt und das Coenzym A abgespalten. Hierbei wird die energiereiche Thioesterbindung des Acetyl-CoA durch einer Hydrolyse aufgespalten.';
		case 'Citrat':
			return 'Die Actionase katalyisert die Dehydratisierung von Citrat(C6) zu cis-Aconitat und Wasser. Daraufhin katalysiert die Actionase die Hydratisierung von cis-Aconitat und Wasser zu Isocitrat(C6). Dabei wird die OH-Gruppe vom Citrat an ein benachbartes Kohlenstoffatom abgegebn. So lagert es sich zu Isocitrat um. Beide Verbindungen besizten die gleichen Atome, sie sind aber jeweils unterschiedlich angeordnet. So entsteht aus einem tertitären Alkohol ein sekundärer Alkohol.';
		case 'Isocitrat':
			return 'Die Isocitrat-Dehydrogenase katalysiert die Oxidation von Isocitrat und NAD+ zu Oxalsuccinat, die abgegebenen Elektronen werden auf den Elektronencarrier NAD+ übertragen und es entsteht ein Molekül NADH/H+. Darufhin katalysiert das Enzym die Decarboxylierung von Oxalsuccinat und H+ zu α-Ketoglutarat und CO2.  ';
		case 'α-Ketoglutarat':
			return 'Die NAD+ abhängige α-Ketoglutarat-Dehydrogenase katalysiert die Oxidation und CO2 absplatung von α-Ketoglutarat. Es entsteht wieder ein Molekül NADH/H+. Zusätzlich überträgt ein Multienzymkomplex eine Coenzym A-Gruppe (CoA) auf das gebildete Molekül. Das Molekül heißt Succinyl-CoA und hat ein sehr energiereiche Bindung.';
		case 'Succinly-CoA':
			return 'Die Succinyl-CoA-Synthetase katalysiert die Abspaltung des Coenzym-A vom Succinyl-CoA Molekül. Dabei wird GTP frei, welches anschließend zu ATP umgewandlet wird. Nun liegt ein Succinat Molekül vor.';
		case 'Succinat':
			return 'Die FAD-abhängige Succinat-Dehydrogenase führt die Oxidation von Succinat zu Fumarat durch. Hierbei wird eine Doppelbindung gebildey und ein Molekül FADH2 freigesetzt.';
		case 'Fumarat':
			return 'Die H20 abhängige Fumarat-Hydratase/Fumarase katalysiert die Ausbildung von Malat. An die doppelbindung von Fumarat bindet sich ein Wassermolekül ';
		case 'Malat':
			return 'Die NAD+ abhängige Malatdehydrogenase oxidiert die OH-Gruppe von Malat zu einer Carbonylgruppe. So bildet sich ein Oxalacetat Molekül, diese liegt dann als Substrat für Schritt 1 des Citratzyklus vor. Auch entsteht hierbei ein Molekül NADH/H+';
		case 'Oxalacetat':
			return 'Die Citratsynthase katalysiert die Übertragung von Acetyl-CoA (C2 Verbindung) aufOxalacetat (C4 Verbindung) unter der Bildung von Citrat (C6 Verbindung). H2O wird eingeführt und das Coenzym A abgespalten. Hierbei wird die energiereiche Thioesterbindung des Acetyl-CoA durch einer Hydrolyse aufgespalten.';
	}
};

export const enzym = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			return 'Citratsynthase';
			break;
		case 'Citrat':
			return 'Aconitathydratase';
			break;
		case 'Isocitrat':
			return 'Isocitrat-Dehydrogenase';
			break;
		case 'α-Ketoglutarat':
			return 'α-Ketoglutarat-Dehydrogenase';
			break;
		case 'Succinly-CoA':
			return 'Succinyl-CoA-Synthetase';
			break;
		case 'Succinat':
			return 'Succinat-Dehydrogenase';
			break;
		case 'Fumarat':
			return 'Fumarat-Hydratase';
			break;
		case 'Malat':
			return 'Malat-Dehydrogenase';
			break;
		case 'Oxalacetat':
			return 'Citratsynthase';
			break;
	}
};

export const reaktionsGleichung = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			return `Oxalacetat + Acetyl-CoA ⟶ Citrat`;
			break;
		case 'Citrat':
			return 'Citrat ⟶ Isocitrat';
			break;
		case 'Isocitrat':
			return 'Isocitrat ⟶ α-Ketoglutarat ';
			break;
		case 'α-Ketoglutarat':
			return 'α-Ketoglutarat ⟶ Succinyl-CoA ';
			break;
		case 'Succinly-CoA':
			return 'Succinyl-CoA  ⟶ Succinat';
			break;
		case 'Succinat':
			return 'Succinat  ⟶ Fumarat';
			break;
		case 'Fumarat':
			return 'Fumarat  ⟶ Malat';
			break;
		case 'Malat':
			return 'Malat  ⟶ Oxalacetat  ';
			break;
		case 'Oxalacetat':
			return 'Oxalacetat  + Acetyl-CoA ⟶ Citrat';
			break;
	}
};

export const reaktion = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			return 'Kondensation';
			break;
		case 'Citrat':
			return 'Dehydratisierung & Hydratisierung';
			break;
		case 'Isocitrat':
			return 'Oxidation & Decarboxylierung';
			break;
		case 'α-Ketoglutarat':
			return 'Oxidative Decarboxylierung';
			break;
		case 'Succinly-CoA':
			return 'Phosphat-Transfer';
			break;
		case 'Succinat':
			return 'Oxidation';
			break;
		case 'Fumarat':
			return 'Hydratisierung';
			break;
		case 'Malat':
			return 'Oxidation';
			break;
		case 'Oxalacetat':
			return 'Kondensation';
			break;
	}
};

export const produkt = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			return 'Citrat';
			break;
		case 'Citrat':
			return '';
			break;
		case '':
			return '';
			break;
		case 'α-Ketoglutarat':
			return 'Succinyl-CoA, NADH, CO2';
			break;
		case 'Succinly-CoA':
			return 'Succinat, GTP, CoA-SH';
			break;
		case 'Succinat':
			return 'Fumarat, FADH2';
			break;
		case 'Fumarat':
			return 'Malat';
			break;
		case 'Malat':
			return 'Oxalacetat, NADH';
			break;
		case 'Oxalacetat':
			return 'Citrat';
			break;
	}
};

export const inhibitor = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			return 'Citrat, NADH, Succinyl-CoA, ATP';
			break;
		case 'Citrat':
			return '';
			break;
		case 'Isocitrat':
			return 'NADH, ATP';
			break;
		case 'α-Ketoglutarat':
			return 'NADH, Succinyl-CoA';
			break;
		case 'Succinly-CoA':
			break;
		case 'Succinat':
			return 'Malonat';
		case 'Fumarat':
			return '';
			break;
		case 'Malat':
			break;
		case 'Oxalacetat':
			return 'Citrat, NADH, Succinyl-CoA, ATP';
	}
};

export const aktivator = (title) => {
	switch (title) {
		case 'Acetzyl-CoA':
			break;
		case 'Citrat':
			break;
		case 'Isocitrat':
			return 'Ca2+, ADP';
		case 'α-Ketoglutarat':
			return 'Ca2+';
		case 'Succinly-CoA':
			break;
		case 'Succinat':
			return 'Mg2+';
		case 'Fumarat':
			break;
		case 'Malat':
			break;
		case 'Oxalacetat':
			break;
	}
};
