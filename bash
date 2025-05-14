# Clone le dépôt Emscripten SDK
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk

# Télécharger et installer la dernière version
./emsdk install latest
./emsdk activate latest

# Ajouter Emscripten aux variables PATH
source ./emsdk_env.sh
