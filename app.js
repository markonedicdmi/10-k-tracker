const companies = [
  { name:'Northstar Systems', ticker:'NSTR', sector:'Technology', year:'2025', date:'Mar 14, 2026', status:'Filed' },
  { name:'Vantage Health', ticker:'VNTH', sector:'Healthcare', year:'2025', date:'Feb 28, 2026', status:'Filed' },
  { name:'Cedar Financial', ticker:'CDFN', sector:'Finance', year:'2025', date:'Feb 21, 2026', status:'Filed' },
  { name:'Juniper Retail', ticker:'JNPR', sector:'Consumer', year:'2025', date:'Jan 31, 2026', status:'Filed' },
  { name:'Atlas Cloud', ticker:'ATLS', sector:'Technology', year:'2026', date:'Nov 17, 2026', status:'Due soon' },
  { name:'Mosaic Bio', ticker:'MSBC', sector:'Healthcare', year:'2026', date:'Dec 04, 2026', status:'Upcoming' },
  { name:'Harbor Capital', ticker:'HRBR', sector:'Finance', year:'2026', date:'Jan 17, 2027', status:'Upcoming' },
  { name:'Solace Foods', ticker:'SLCE', sector:'Consumer', year:'2026', date:'Jan 29, 2027', status:'Upcoming' }
];
const rows = document.querySelector('#companyRows'); const emptyState = document.querySelector('#emptyState'); const searchInput = document.querySelector('#searchInput'); const sectorFilter = document.querySelector('#sectorFilter'); const statusFilter = document.querySelector('#statusFilter'); const statusClass = status => status.toLowerCase().replace(' ', '-');
function render() { const query = searchInput.value.trim().toLowerCase(); const filtered = companies.filter(company => (!query || `${company.name} ${company.ticker}`.toLowerCase().includes(query)) && (sectorFilter.value === 'all' || company.sector === sectorFilter.value) && (statusFilter.value === 'all' || company.status === statusFilter.value)); rows.innerHTML = filtered.map(company => `<tr><td>${company.name}<span class="ticker">${company.ticker}</span></td><td>${company.sector}</td><td>${company.year}</td><td>${company.date}</td><td><span class="status ${statusClass(company.status)}">${company.status}</span></td><td><a class="details" href="https://www.sec.gov/edgar/search/" target="_blank" rel="noreferrer" aria-label="View SEC filings for ${company.name}">↗</a></td></tr>`).join(''); emptyState.hidden = filtered.length !== 0; }
[searchInput, sectorFilter, statusFilter].forEach(control => control.addEventListener('input', render));
document.querySelector('#exportButton').addEventListener('click', () => { const header = 'Company,Ticker,Sector,Fiscal year,Filed / due,Status'; const csv = [header, ...companies.map(c => [c.name,c.ticker,c.sector,c.year,c.date,c.status].join(','))].join('\n'); const blob = new Blob([csv], { type:'text/csv' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = '10-k-tracker.csv'; link.click(); URL.revokeObjectURL(link.href); });
render();
