# GObject-Introspection 1.76.1  
![Static Badge](https://img.shields.io/badge/class-devel-D7D1CC)  
  
  
GObject introspection is a middleware layer between C libraries
 (using GObject) and language bindings. The C library can be scanned at
 compile time and generate a metadata file, in addition to the actual
 native C library. Then at runtime, language bindings can read this
 metadata and automatically provide bindings to call into the C library.  
  
  
## Homepage  
The homepage for GObject-Introspection 1.76.1 
[https://gi.readthedocs.io/en/latest/](https://gi.readthedocs.io/en/latest/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load gobject-introspection/.1.76.1-gcccore-12.3.0`**  
  
### Toolchain  
GCCcore-12.3.0  
  
### Toolchain Options  
(none)  
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
GObject-Introspection depends on the following modules, and they will be loaded automatically with this module.  
  
[Python 3.11.3  (GCCcore-12.3.0)](python-3.11.3-gcccore-12.3.0.md)  
[GLib 2.77.1  (GCCcore-12.3.0)](glib-.2.77.1-gcccore-12.3.0.md)  
[libffi 3.4.4  (GCCcore-12.3.0)](libffi-.3.4.4-gcccore-12.3.0.md)  
[util-linux 2.39  (GCCcore-12.3.0)](util-linux-.2.39-gcccore-12.3.0.md)  
  
## Dependency of modules  
The following modules will load GObject-Introspection as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
