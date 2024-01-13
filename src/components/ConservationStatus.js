// ConservationStatus.jsx
import React from 'react';

const ConservationStatus = ({ plantData, roundedSRank }) => (
  <div className='conservation-subtitle-2'>
    {getStatusTitle(roundedSRank)}:
    <div className='class-1'>
      {getSubnationNames(plantData, roundedSRank) || 'N/A'}
    </div>
  </div>
);

const getStatusTitle = (roundedSRank) => {
  const statusTitles = {
    'SX': 'Presumed Extinct',
    'SH': 'Possibly Extinct',
    'S1': 'Critically Imperiled',
    'S2': 'Imperiled',
    'S3': 'Vulnerable',
    'S4': 'Apparently Secure',
    'S5': 'Secure',
    'SNA': 'No Status Rank',
  };

  return statusTitles[roundedSRank] || 'Unknown Status';
};

const getSubnationNames = (plantData, roundedSRank) => {
  const stateAbbreviations = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming',
  };

  const filteredNations = plantData.plant.nations.filter(nation =>
    nation.nationCode === 'US' && nation.subnations.some(subnation => subnation.roundedSRank === roundedSRank)
  );

  return filteredNations.length > 0
    ? filteredNations.map(filteredNation =>
      filteredNation.subnations
        .filter(subnation => subnation.roundedSRank === roundedSRank)
        .map(subnation => stateAbbreviations[subnation.subnationCode])
        .join(', ')
    ).join(', ')
    : null;
};

export default ConservationStatus;
