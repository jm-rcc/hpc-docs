# prokka 1.14.5  
(bio)  
  
  
Prokka is a software tool for the rapid annotation of prokaryotic genomes.  
  
  
### Toolchain  
{'name': 'gompi', 'version': '2021a'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load prokka/1.14.5-gompi-2021a`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
dependencies = [
    ('BioPerl', '1.7.8'),
    ('BLAST+', '2.11.0'),
    ('Java', '11', '', SYSTEM),
    ('Bio-SearchIO-hmmer', '1.7.3'),
    ('parallel', '20210622'),
    ('tbl2asn', '20230119', '-linux64', SYSTEM),
]  
  
