# any2fasta 0.4.2  
(tools)  
  
  
Convert various sequence formats to FASTA  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load any2fasta/0.4.2-gcccore-10.3.0`** to load the module on Bunya.  
  
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
dependencies = [('Perl', '5.32.1')]

modextrapaths = {'PATH': ''}

sanity_check_paths = {
    'files': ['any2fasta'],
    'dirs': [],
}

sanity_check_commands = [
    'any2fasta -h',
    'any2fasta -q %(builddir)s/%(name)s-%(version)s/test.fq',
]  
  
