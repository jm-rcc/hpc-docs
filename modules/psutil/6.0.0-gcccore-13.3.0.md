# psutil 6.0.0  
(lib)  
  
  
A cross-platform process and system utilities module for Python  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '13.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load psutil/6.0.0-gcccore-13.3.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 h100  
- epyc3 mi210  
  
  
## Dependencies  
dependencies = [('binutils', '2.42')]

dependencies = [('Python', '3.12.3')]

exts_list = [
    (name, version, {
        'source_urls': ['https://github.com/giampaolo/psutil/archive'],
        'sources': ['%(name)s-%(version)s.tar.gz'],
        'checksums': ['8faae4f310b6d969fa26ca0545338b21f73c6b15db7c4a8d934a5482faa818f2'],
    }),
]  
  
