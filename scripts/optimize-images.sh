#!/bin/bash
# Image optimization script
# Run this after downloading images to optimize them for web

echo "🎨 Optimizing images for web..."

# Install dependencies if needed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Please install:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    echo "  Windows: Download from https://imagemagick.org/script/download.php"
    exit 1
fi

cd public/images/articles

# Create backup folder
mkdir -p originals

# Optimize each image

echo "Optimizing followmystuffRunnerBeach.jpg..."
# Backup original
cp "followmystuffRunnerBeach.jpg" "originals/followmystuffRunnerBeach.jpg"

if [[ "followmystuffRunnerBeach.jpg" == *.jpg ]] || [[ "followmystuffRunnerBeach.jpg" == *.jpeg ]]; then
    convert "followmystuffRunnerBeach.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_followmystuffRunnerBeach.jpg"
    mv "optimized_followmystuffRunnerBeach.jpg" "followmystuffRunnerBeach.jpg"
elif [[ "followmystuffRunnerBeach.jpg" == *.png ]]; then
    convert "followmystuffRunnerBeach.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_followmystuffRunnerBeach.jpg"
    mv "optimized_followmystuffRunnerBeach.jpg" "followmystuffRunnerBeach.jpg"
fi
echo "Optimizing followInspirationalQuotesStartDay.jpg..."
# Backup original
cp "followInspirationalQuotesStartDay.jpg" "originals/followInspirationalQuotesStartDay.jpg"

if [[ "followInspirationalQuotesStartDay.jpg" == *.jpg ]] || [[ "followInspirationalQuotesStartDay.jpg" == *.jpeg ]]; then
    convert "followInspirationalQuotesStartDay.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_followInspirationalQuotesStartDay.jpg"
    mv "optimized_followInspirationalQuotesStartDay.jpg" "followInspirationalQuotesStartDay.jpg"
elif [[ "followInspirationalQuotesStartDay.jpg" == *.png ]]; then
    convert "followInspirationalQuotesStartDay.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_followInspirationalQuotesStartDay.jpg"
    mv "optimized_followInspirationalQuotesStartDay.jpg" "followInspirationalQuotesStartDay.jpg"
fi
echo "Optimizing runningwatches.jpg..."
# Backup original
cp "runningwatches.jpg" "originals/runningwatches.jpg"

if [[ "runningwatches.jpg" == *.jpg ]] || [[ "runningwatches.jpg" == *.jpeg ]]; then
    convert "runningwatches.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_runningwatches.jpg"
    mv "optimized_runningwatches.jpg" "runningwatches.jpg"
elif [[ "runningwatches.jpg" == *.png ]]; then
    convert "runningwatches.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_runningwatches.jpg"
    mv "optimized_runningwatches.jpg" "runningwatches.jpg"
fi
echo "Optimizing parkourparadise.jpg..."
# Backup original
cp "parkourparadise.jpg" "originals/parkourparadise.jpg"

if [[ "parkourparadise.jpg" == *.jpg ]] || [[ "parkourparadise.jpg" == *.jpeg ]]; then
    convert "parkourparadise.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_parkourparadise.jpg"
    mv "optimized_parkourparadise.jpg" "parkourparadise.jpg"
elif [[ "parkourparadise.jpg" == *.png ]]; then
    convert "parkourparadise.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_parkourparadise.jpg"
    mv "optimized_parkourparadise.jpg" "parkourparadise.jpg"
fi
echo "Optimizing formattingDiscord.jpg..."
# Backup original
cp "formattingDiscord.jpg" "originals/formattingDiscord.jpg"

if [[ "formattingDiscord.jpg" == *.jpg ]] || [[ "formattingDiscord.jpg" == *.jpeg ]]; then
    convert "formattingDiscord.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_formattingDiscord.jpg"
    mv "optimized_formattingDiscord.jpg" "formattingDiscord.jpg"
elif [[ "formattingDiscord.jpg" == *.png ]]; then
    convert "formattingDiscord.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_formattingDiscord.jpg"
    mv "optimized_formattingDiscord.jpg" "formattingDiscord.jpg"
fi
echo "Optimizing faster-computer.jpg..."
# Backup original
cp "faster-computer.jpg" "originals/faster-computer.jpg"

if [[ "faster-computer.jpg" == *.jpg ]] || [[ "faster-computer.jpg" == *.jpeg ]]; then
    convert "faster-computer.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_faster-computer.jpg"
    mv "optimized_faster-computer.jpg" "faster-computer.jpg"
elif [[ "faster-computer.jpg" == *.png ]]; then
    convert "faster-computer.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_faster-computer.jpg"
    mv "optimized_faster-computer.jpg" "faster-computer.jpg"
fi
echo "Optimizing oscarpartypeople.jpg..."
# Backup original
cp "oscarpartypeople.jpg" "originals/oscarpartypeople.jpg"

if [[ "oscarpartypeople.jpg" == *.jpg ]] || [[ "oscarpartypeople.jpg" == *.jpeg ]]; then
    convert "oscarpartypeople.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_oscarpartypeople.jpg"
    mv "optimized_oscarpartypeople.jpg" "oscarpartypeople.jpg"
elif [[ "oscarpartypeople.jpg" == *.png ]]; then
    convert "oscarpartypeople.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_oscarpartypeople.jpg"
    mv "optimized_oscarpartypeople.jpg" "oscarpartypeople.jpg"
fi
echo "Optimizing man-office-computer.jpeg..."
# Backup original
cp "man-office-computer.jpeg" "originals/man-office-computer.jpeg"

if [[ "man-office-computer.jpeg" == *.jpg ]] || [[ "man-office-computer.jpeg" == *.jpeg ]]; then
    convert "man-office-computer.jpeg" -quality 85 -strip -resize "1200x1200>" "optimized_man-office-computer.jpeg"
    mv "optimized_man-office-computer.jpeg" "man-office-computer.jpeg"
elif [[ "man-office-computer.jpeg" == *.png ]]; then
    convert "man-office-computer.jpeg" -quality 85 -strip -resize "1200x1200>" "optimized_man-office-computer.jpeg"
    mv "optimized_man-office-computer.jpeg" "man-office-computer.jpeg"
fi
echo "Optimizing femalerunneryellowdetermined.jpg..."
# Backup original
cp "femalerunneryellowdetermined.jpg" "originals/femalerunneryellowdetermined.jpg"

if [[ "femalerunneryellowdetermined.jpg" == *.jpg ]] || [[ "femalerunneryellowdetermined.jpg" == *.jpeg ]]; then
    convert "femalerunneryellowdetermined.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_femalerunneryellowdetermined.jpg"
    mv "optimized_femalerunneryellowdetermined.jpg" "femalerunneryellowdetermined.jpg"
elif [[ "femalerunneryellowdetermined.jpg" == *.png ]]; then
    convert "femalerunneryellowdetermined.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_femalerunneryellowdetermined.jpg"
    mv "optimized_femalerunneryellowdetermined.jpg" "femalerunneryellowdetermined.jpg"
fi
echo "Optimizing maninsweatshirtheart.jpg..."
# Backup original
cp "maninsweatshirtheart.jpg" "originals/maninsweatshirtheart.jpg"

if [[ "maninsweatshirtheart.jpg" == *.jpg ]] || [[ "maninsweatshirtheart.jpg" == *.jpeg ]]; then
    convert "maninsweatshirtheart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_maninsweatshirtheart.jpg"
    mv "optimized_maninsweatshirtheart.jpg" "maninsweatshirtheart.jpg"
elif [[ "maninsweatshirtheart.jpg" == *.png ]]; then
    convert "maninsweatshirtheart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_maninsweatshirtheart.jpg"
    mv "optimized_maninsweatshirtheart.jpg" "maninsweatshirtheart.jpg"
fi
echo "Optimizing fitnesswithdog.jpg..."
# Backup original
cp "fitnesswithdog.jpg" "originals/fitnesswithdog.jpg"

if [[ "fitnesswithdog.jpg" == *.jpg ]] || [[ "fitnesswithdog.jpg" == *.jpeg ]]; then
    convert "fitnesswithdog.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fitnesswithdog.jpg"
    mv "optimized_fitnesswithdog.jpg" "fitnesswithdog.jpg"
elif [[ "fitnesswithdog.jpg" == *.png ]]; then
    convert "fitnesswithdog.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fitnesswithdog.jpg"
    mv "optimized_fitnesswithdog.jpg" "fitnesswithdog.jpg"
fi
echo "Optimizing animegirlsketch.jpg..."
# Backup original
cp "animegirlsketch.jpg" "originals/animegirlsketch.jpg"

if [[ "animegirlsketch.jpg" == *.jpg ]] || [[ "animegirlsketch.jpg" == *.jpeg ]]; then
    convert "animegirlsketch.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_animegirlsketch.jpg"
    mv "optimized_animegirlsketch.jpg" "animegirlsketch.jpg"
elif [[ "animegirlsketch.jpg" == *.png ]]; then
    convert "animegirlsketch.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_animegirlsketch.jpg"
    mv "optimized_animegirlsketch.jpg" "animegirlsketch.jpg"
fi
echo "Optimizing drawingatree.jpg..."
# Backup original
cp "drawingatree.jpg" "originals/drawingatree.jpg"

if [[ "drawingatree.jpg" == *.jpg ]] || [[ "drawingatree.jpg" == *.jpeg ]]; then
    convert "drawingatree.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_drawingatree.jpg"
    mv "optimized_drawingatree.jpg" "drawingatree.jpg"
elif [[ "drawingatree.jpg" == *.png ]]; then
    convert "drawingatree.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_drawingatree.jpg"
    mv "optimized_drawingatree.jpg" "drawingatree.jpg"
fi
echo "Optimizing female-runner-yellow-top.jpg..."
# Backup original
cp "female-runner-yellow-top.jpg" "originals/female-runner-yellow-top.jpg"

if [[ "female-runner-yellow-top.jpg" == *.jpg ]] || [[ "female-runner-yellow-top.jpg" == *.jpeg ]]; then
    convert "female-runner-yellow-top.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_female-runner-yellow-top.jpg"
    mv "optimized_female-runner-yellow-top.jpg" "female-runner-yellow-top.jpg"
elif [[ "female-runner-yellow-top.jpg" == *.png ]]; then
    convert "female-runner-yellow-top.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_female-runner-yellow-top.jpg"
    mv "optimized_female-runner-yellow-top.jpg" "female-runner-yellow-top.jpg"
fi
echo "Optimizing procreatebanana.jpg..."
# Backup original
cp "procreatebanana.jpg" "originals/procreatebanana.jpg"

if [[ "procreatebanana.jpg" == *.jpg ]] || [[ "procreatebanana.jpg" == *.jpeg ]]; then
    convert "procreatebanana.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_procreatebanana.jpg"
    mv "optimized_procreatebanana.jpg" "procreatebanana.jpg"
elif [[ "procreatebanana.jpg" == *.png ]]; then
    convert "procreatebanana.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_procreatebanana.jpg"
    mv "optimized_procreatebanana.jpg" "procreatebanana.jpg"
fi
echo "Optimizing BitcoinInvestorSF.jpg..."
# Backup original
cp "BitcoinInvestorSF.jpg" "originals/BitcoinInvestorSF.jpg"

if [[ "BitcoinInvestorSF.jpg" == *.jpg ]] || [[ "BitcoinInvestorSF.jpg" == *.jpeg ]]; then
    convert "BitcoinInvestorSF.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_BitcoinInvestorSF.jpg"
    mv "optimized_BitcoinInvestorSF.jpg" "BitcoinInvestorSF.jpg"
elif [[ "BitcoinInvestorSF.jpg" == *.png ]]; then
    convert "BitcoinInvestorSF.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_BitcoinInvestorSF.jpg"
    mv "optimized_BitcoinInvestorSF.jpg" "BitcoinInvestorSF.jpg"
fi
echo "Optimizing safebankbuilding.jpg..."
# Backup original
cp "safebankbuilding.jpg" "originals/safebankbuilding.jpg"

if [[ "safebankbuilding.jpg" == *.jpg ]] || [[ "safebankbuilding.jpg" == *.jpeg ]]; then
    convert "safebankbuilding.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_safebankbuilding.jpg"
    mv "optimized_safebankbuilding.jpg" "safebankbuilding.jpg"
elif [[ "safebankbuilding.jpg" == *.png ]]; then
    convert "safebankbuilding.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_safebankbuilding.jpg"
    mv "optimized_safebankbuilding.jpg" "safebankbuilding.jpg"
fi
echo "Optimizing CryptoLambo.jpg..."
# Backup original
cp "CryptoLambo.jpg" "originals/CryptoLambo.jpg"

if [[ "CryptoLambo.jpg" == *.jpg ]] || [[ "CryptoLambo.jpg" == *.jpeg ]]; then
    convert "CryptoLambo.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_CryptoLambo.jpg"
    mv "optimized_CryptoLambo.jpg" "CryptoLambo.jpg"
elif [[ "CryptoLambo.jpg" == *.png ]]; then
    convert "CryptoLambo.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_CryptoLambo.jpg"
    mv "optimized_CryptoLambo.jpg" "CryptoLambo.jpg"
fi
echo "Optimizing cryptohoodiescreens.jpg..."
# Backup original
cp "cryptohoodiescreens.jpg" "originals/cryptohoodiescreens.jpg"

if [[ "cryptohoodiescreens.jpg" == *.jpg ]] || [[ "cryptohoodiescreens.jpg" == *.jpeg ]]; then
    convert "cryptohoodiescreens.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_cryptohoodiescreens.jpg"
    mv "optimized_cryptohoodiescreens.jpg" "cryptohoodiescreens.jpg"
elif [[ "cryptohoodiescreens.jpg" == *.png ]]; then
    convert "cryptohoodiescreens.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_cryptohoodiescreens.jpg"
    mv "optimized_cryptohoodiescreens.jpg" "cryptohoodiescreens.jpg"
fi
echo "Optimizing cryptocurrencymonsters2023.jpg..."
# Backup original
cp "cryptocurrencymonsters2023.jpg" "originals/cryptocurrencymonsters2023.jpg"

if [[ "cryptocurrencymonsters2023.jpg" == *.jpg ]] || [[ "cryptocurrencymonsters2023.jpg" == *.jpeg ]]; then
    convert "cryptocurrencymonsters2023.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_cryptocurrencymonsters2023.jpg"
    mv "optimized_cryptocurrencymonsters2023.jpg" "cryptocurrencymonsters2023.jpg"
elif [[ "cryptocurrencymonsters2023.jpg" == *.png ]]; then
    convert "cryptocurrencymonsters2023.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_cryptocurrencymonsters2023.jpg"
    mv "optimized_cryptocurrencymonsters2023.jpg" "cryptocurrencymonsters2023.jpg"
fi
echo "Optimizing arthistory.jpg..."
# Backup original
cp "arthistory.jpg" "originals/arthistory.jpg"

if [[ "arthistory.jpg" == *.jpg ]] || [[ "arthistory.jpg" == *.jpeg ]]; then
    convert "arthistory.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_arthistory.jpg"
    mv "optimized_arthistory.jpg" "arthistory.jpg"
elif [[ "arthistory.jpg" == *.png ]]; then
    convert "arthistory.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_arthistory.jpg"
    mv "optimized_arthistory.jpg" "arthistory.jpg"
fi
echo "Optimizing pillarcryptowallet.jpg..."
# Backup original
cp "pillarcryptowallet.jpg" "originals/pillarcryptowallet.jpg"

if [[ "pillarcryptowallet.jpg" == *.jpg ]] || [[ "pillarcryptowallet.jpg" == *.jpeg ]]; then
    convert "pillarcryptowallet.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_pillarcryptowallet.jpg"
    mv "optimized_pillarcryptowallet.jpg" "pillarcryptowallet.jpg"
elif [[ "pillarcryptowallet.jpg" == *.png ]]; then
    convert "pillarcryptowallet.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_pillarcryptowallet.jpg"
    mv "optimized_pillarcryptowallet.jpg" "pillarcryptowallet.jpg"
fi
echo "Optimizing NFTlizard.jpg..."
# Backup original
cp "NFTlizard.jpg" "originals/NFTlizard.jpg"

if [[ "NFTlizard.jpg" == *.jpg ]] || [[ "NFTlizard.jpg" == *.jpeg ]]; then
    convert "NFTlizard.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_NFTlizard.jpg"
    mv "optimized_NFTlizard.jpg" "NFTlizard.jpg"
elif [[ "NFTlizard.jpg" == *.png ]]; then
    convert "NFTlizard.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_NFTlizard.jpg"
    mv "optimized_NFTlizard.jpg" "NFTlizard.jpg"
fi
echo "Optimizing beautypowerdigitalart.jpg..."
# Backup original
cp "beautypowerdigitalart.jpg" "originals/beautypowerdigitalart.jpg"

if [[ "beautypowerdigitalart.jpg" == *.jpg ]] || [[ "beautypowerdigitalart.jpg" == *.jpeg ]]; then
    convert "beautypowerdigitalart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_beautypowerdigitalart.jpg"
    mv "optimized_beautypowerdigitalart.jpg" "beautypowerdigitalart.jpg"
elif [[ "beautypowerdigitalart.jpg" == *.png ]]; then
    convert "beautypowerdigitalart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_beautypowerdigitalart.jpg"
    mv "optimized_beautypowerdigitalart.jpg" "beautypowerdigitalart.jpg"
fi
echo "Optimizing diversityandinclusioninart.jpg..."
# Backup original
cp "diversityandinclusioninart.jpg" "originals/diversityandinclusioninart.jpg"

if [[ "diversityandinclusioninart.jpg" == *.jpg ]] || [[ "diversityandinclusioninart.jpg" == *.jpeg ]]; then
    convert "diversityandinclusioninart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_diversityandinclusioninart.jpg"
    mv "optimized_diversityandinclusioninart.jpg" "diversityandinclusioninart.jpg"
elif [[ "diversityandinclusioninart.jpg" == *.png ]]; then
    convert "diversityandinclusioninart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_diversityandinclusioninart.jpg"
    mv "optimized_diversityandinclusioninart.jpg" "diversityandinclusioninart.jpg"
fi
echo "Optimizing streetartstyle.jpg..."
# Backup original
cp "streetartstyle.jpg" "originals/streetartstyle.jpg"

if [[ "streetartstyle.jpg" == *.jpg ]] || [[ "streetartstyle.jpg" == *.jpeg ]]; then
    convert "streetartstyle.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_streetartstyle.jpg"
    mv "optimized_streetartstyle.jpg" "streetartstyle.jpg"
elif [[ "streetartstyle.jpg" == *.png ]]; then
    convert "streetartstyle.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_streetartstyle.jpg"
    mv "optimized_streetartstyle.jpg" "streetartstyle.jpg"
fi
echo "Optimizing generative-AI.jpg..."
# Backup original
cp "generative-AI.jpg" "originals/generative-AI.jpg"

if [[ "generative-AI.jpg" == *.jpg ]] || [[ "generative-AI.jpg" == *.jpeg ]]; then
    convert "generative-AI.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_generative-AI.jpg"
    mv "optimized_generative-AI.jpg" "generative-AI.jpg"
elif [[ "generative-AI.jpg" == *.png ]]; then
    convert "generative-AI.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_generative-AI.jpg"
    mv "optimized_generative-AI.jpg" "generative-AI.jpg"
fi
echo "Optimizing twodogsplayingblackjack.jpg..."
# Backup original
cp "twodogsplayingblackjack.jpg" "originals/twodogsplayingblackjack.jpg"

if [[ "twodogsplayingblackjack.jpg" == *.jpg ]] || [[ "twodogsplayingblackjack.jpg" == *.jpeg ]]; then
    convert "twodogsplayingblackjack.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_twodogsplayingblackjack.jpg"
    mv "optimized_twodogsplayingblackjack.jpg" "twodogsplayingblackjack.jpg"
elif [[ "twodogsplayingblackjack.jpg" == *.png ]]; then
    convert "twodogsplayingblackjack.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_twodogsplayingblackjack.jpg"
    mv "optimized_twodogsplayingblackjack.jpg" "twodogsplayingblackjack.jpg"
fi
echo "Optimizing environmentalart.jpg..."
# Backup original
cp "environmentalart.jpg" "originals/environmentalart.jpg"

if [[ "environmentalart.jpg" == *.jpg ]] || [[ "environmentalart.jpg" == *.jpeg ]]; then
    convert "environmentalart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_environmentalart.jpg"
    mv "optimized_environmentalart.jpg" "environmentalart.jpg"
elif [[ "environmentalart.jpg" == *.png ]]; then
    convert "environmentalart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_environmentalart.jpg"
    mv "optimized_environmentalart.jpg" "environmentalart.jpg"
fi
echo "Optimizing renaissanceart.jpg..."
# Backup original
cp "renaissanceart.jpg" "originals/renaissanceart.jpg"

if [[ "renaissanceart.jpg" == *.jpg ]] || [[ "renaissanceart.jpg" == *.jpeg ]]; then
    convert "renaissanceart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_renaissanceart.jpg"
    mv "optimized_renaissanceart.jpg" "renaissanceart.jpg"
elif [[ "renaissanceart.jpg" == *.png ]]; then
    convert "renaissanceart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_renaissanceart.jpg"
    mv "optimized_renaissanceart.jpg" "renaissanceart.jpg"
fi
echo "Optimizing insidesushirestaurant.jpg..."
# Backup original
cp "insidesushirestaurant.jpg" "originals/insidesushirestaurant.jpg"

if [[ "insidesushirestaurant.jpg" == *.jpg ]] || [[ "insidesushirestaurant.jpg" == *.jpeg ]]; then
    convert "insidesushirestaurant.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_insidesushirestaurant.jpg"
    mv "optimized_insidesushirestaurant.jpg" "insidesushirestaurant.jpg"
elif [[ "insidesushirestaurant.jpg" == *.png ]]; then
    convert "insidesushirestaurant.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_insidesushirestaurant.jpg"
    mv "optimized_insidesushirestaurant.jpg" "insidesushirestaurant.jpg"
fi
echo "Optimizing sushionplate.jpg..."
# Backup original
cp "sushionplate.jpg" "originals/sushionplate.jpg"

if [[ "sushionplate.jpg" == *.jpg ]] || [[ "sushionplate.jpg" == *.jpeg ]]; then
    convert "sushionplate.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_sushionplate.jpg"
    mv "optimized_sushionplate.jpg" "sushionplate.jpg"
elif [[ "sushionplate.jpg" == *.png ]]; then
    convert "sushionplate.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_sushionplate.jpg"
    mv "optimized_sushionplate.jpg" "sushionplate.jpg"
fi
echo "Optimizing twodogsplayingblackjackcasino.jpg..."
# Backup original
cp "twodogsplayingblackjackcasino.jpg" "originals/twodogsplayingblackjackcasino.jpg"

if [[ "twodogsplayingblackjackcasino.jpg" == *.jpg ]] || [[ "twodogsplayingblackjackcasino.jpg" == *.jpeg ]]; then
    convert "twodogsplayingblackjackcasino.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_twodogsplayingblackjackcasino.jpg"
    mv "optimized_twodogsplayingblackjackcasino.jpg" "twodogsplayingblackjackcasino.jpg"
elif [[ "twodogsplayingblackjackcasino.jpg" == *.png ]]; then
    convert "twodogsplayingblackjackcasino.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_twodogsplayingblackjackcasino.jpg"
    mv "optimized_twodogsplayingblackjackcasino.jpg" "twodogsplayingblackjackcasino.jpg"
fi
echo "Optimizing arteducationinschools.jpg..."
# Backup original
cp "arteducationinschools.jpg" "originals/arteducationinschools.jpg"

if [[ "arteducationinschools.jpg" == *.jpg ]] || [[ "arteducationinschools.jpg" == *.jpeg ]]; then
    convert "arteducationinschools.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_arteducationinschools.jpg"
    mv "optimized_arteducationinschools.jpg" "arteducationinschools.jpg"
elif [[ "arteducationinschools.jpg" == *.png ]]; then
    convert "arteducationinschools.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_arteducationinschools.jpg"
    mv "optimized_arteducationinschools.jpg" "arteducationinschools.jpg"
fi
echo "Optimizing artinculturalpreservation.jpg..."
# Backup original
cp "artinculturalpreservation.jpg" "originals/artinculturalpreservation.jpg"

if [[ "artinculturalpreservation.jpg" == *.jpg ]] || [[ "artinculturalpreservation.jpg" == *.jpeg ]]; then
    convert "artinculturalpreservation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artinculturalpreservation.jpg"
    mv "optimized_artinculturalpreservation.jpg" "artinculturalpreservation.jpg"
elif [[ "artinculturalpreservation.jpg" == *.png ]]; then
    convert "artinculturalpreservation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artinculturalpreservation.jpg"
    mv "optimized_artinculturalpreservation.jpg" "artinculturalpreservation.jpg"
fi
echo "Optimizing colorcontemporaryart.jpg..."
# Backup original
cp "colorcontemporaryart.jpg" "originals/colorcontemporaryart.jpg"

if [[ "colorcontemporaryart.jpg" == *.jpg ]] || [[ "colorcontemporaryart.jpg" == *.jpeg ]]; then
    convert "colorcontemporaryart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_colorcontemporaryart.jpg"
    mv "optimized_colorcontemporaryart.jpg" "colorcontemporaryart.jpg"
elif [[ "colorcontemporaryart.jpg" == *.png ]]; then
    convert "colorcontemporaryart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_colorcontemporaryart.jpg"
    mv "optimized_colorcontemporaryart.jpg" "colorcontemporaryart.jpg"
fi
echo "Optimizing impactoftechnologyindesign.jpg..."
# Backup original
cp "impactoftechnologyindesign.jpg" "originals/impactoftechnologyindesign.jpg"

if [[ "impactoftechnologyindesign.jpg" == *.jpg ]] || [[ "impactoftechnologyindesign.jpg" == *.jpeg ]]; then
    convert "impactoftechnologyindesign.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_impactoftechnologyindesign.jpg"
    mv "optimized_impactoftechnologyindesign.jpg" "impactoftechnologyindesign.jpg"
elif [[ "impactoftechnologyindesign.jpg" == *.png ]]; then
    convert "impactoftechnologyindesign.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_impactoftechnologyindesign.jpg"
    mv "optimized_impactoftechnologyindesign.jpg" "impactoftechnologyindesign.jpg"
fi
echo "Optimizing beginningrunnergear.jpg..."
# Backup original
cp "beginningrunnergear.jpg" "originals/beginningrunnergear.jpg"

if [[ "beginningrunnergear.jpg" == *.jpg ]] || [[ "beginningrunnergear.jpg" == *.jpeg ]]; then
    convert "beginningrunnergear.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_beginningrunnergear.jpg"
    mv "optimized_beginningrunnergear.jpg" "beginningrunnergear.jpg"
elif [[ "beginningrunnergear.jpg" == *.png ]]; then
    convert "beginningrunnergear.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_beginningrunnergear.jpg"
    mv "optimized_beginningrunnergear.jpg" "beginningrunnergear.jpg"
fi
echo "Optimizing jobinterview.jpg..."
# Backup original
cp "jobinterview.jpg" "originals/jobinterview.jpg"

if [[ "jobinterview.jpg" == *.jpg ]] || [[ "jobinterview.jpg" == *.jpeg ]]; then
    convert "jobinterview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_jobinterview.jpg"
    mv "optimized_jobinterview.jpg" "jobinterview.jpg"
elif [[ "jobinterview.jpg" == *.png ]]; then
    convert "jobinterview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_jobinterview.jpg"
    mv "optimized_jobinterview.jpg" "jobinterview.jpg"
fi
echo "Optimizing topjob2023.jpg..."
# Backup original
cp "topjob2023.jpg" "originals/topjob2023.jpg"

if [[ "topjob2023.jpg" == *.jpg ]] || [[ "topjob2023.jpg" == *.jpeg ]]; then
    convert "topjob2023.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_topjob2023.jpg"
    mv "optimized_topjob2023.jpg" "topjob2023.jpg"
elif [[ "topjob2023.jpg" == *.png ]]; then
    convert "topjob2023.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_topjob2023.jpg"
    mv "optimized_topjob2023.jpg" "topjob2023.jpg"
fi
echo "Optimizing resumewriting.jpg..."
# Backup original
cp "resumewriting.jpg" "originals/resumewriting.jpg"

if [[ "resumewriting.jpg" == *.jpg ]] || [[ "resumewriting.jpg" == *.jpeg ]]; then
    convert "resumewriting.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resumewriting.jpg"
    mv "optimized_resumewriting.jpg" "resumewriting.jpg"
elif [[ "resumewriting.jpg" == *.png ]]; then
    convert "resumewriting.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resumewriting.jpg"
    mv "optimized_resumewriting.jpg" "resumewriting.jpg"
fi
echo "Optimizing perfectrunningshoe.jpg..."
# Backup original
cp "perfectrunningshoe.jpg" "originals/perfectrunningshoe.jpg"

if [[ "perfectrunningshoe.jpg" == *.jpg ]] || [[ "perfectrunningshoe.jpg" == *.jpeg ]]; then
    convert "perfectrunningshoe.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_perfectrunningshoe.jpg"
    mv "optimized_perfectrunningshoe.jpg" "perfectrunningshoe.jpg"
elif [[ "perfectrunningshoe.jpg" == *.png ]]; then
    convert "perfectrunningshoe.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_perfectrunningshoe.jpg"
    mv "optimized_perfectrunningshoe.jpg" "perfectrunningshoe.jpg"
fi
echo "Optimizing entrepreneurdayinthelife.jpg..."
# Backup original
cp "entrepreneurdayinthelife.jpg" "originals/entrepreneurdayinthelife.jpg"

if [[ "entrepreneurdayinthelife.jpg" == *.jpg ]] || [[ "entrepreneurdayinthelife.jpg" == *.jpeg ]]; then
    convert "entrepreneurdayinthelife.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_entrepreneurdayinthelife.jpg"
    mv "optimized_entrepreneurdayinthelife.jpg" "entrepreneurdayinthelife.jpg"
elif [[ "entrepreneurdayinthelife.jpg" == *.png ]]; then
    convert "entrepreneurdayinthelife.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_entrepreneurdayinthelife.jpg"
    mv "optimized_entrepreneurdayinthelife.jpg" "entrepreneurdayinthelife.jpg"
fi
echo "Optimizing skillstimemanagement.jpg..."
# Backup original
cp "skillstimemanagement.jpg" "originals/skillstimemanagement.jpg"

if [[ "skillstimemanagement.jpg" == *.jpg ]] || [[ "skillstimemanagement.jpg" == *.jpeg ]]; then
    convert "skillstimemanagement.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_skillstimemanagement.jpg"
    mv "optimized_skillstimemanagement.jpg" "skillstimemanagement.jpg"
elif [[ "skillstimemanagement.jpg" == *.png ]]; then
    convert "skillstimemanagement.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_skillstimemanagement.jpg"
    mv "optimized_skillstimemanagement.jpg" "skillstimemanagement.jpg"
fi
echo "Optimizing careernetworkingevent.jpg..."
# Backup original
cp "careernetworkingevent.jpg" "originals/careernetworkingevent.jpg"

if [[ "careernetworkingevent.jpg" == *.jpg ]] || [[ "careernetworkingevent.jpg" == *.jpeg ]]; then
    convert "careernetworkingevent.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_careernetworkingevent.jpg"
    mv "optimized_careernetworkingevent.jpg" "careernetworkingevent.jpg"
elif [[ "careernetworkingevent.jpg" == *.png ]]; then
    convert "careernetworkingevent.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_careernetworkingevent.jpg"
    mv "optimized_careernetworkingevent.jpg" "careernetworkingevent.jpg"
fi
echo "Optimizing negotiatingsalary.jpg..."
# Backup original
cp "negotiatingsalary.jpg" "originals/negotiatingsalary.jpg"

if [[ "negotiatingsalary.jpg" == *.jpg ]] || [[ "negotiatingsalary.jpg" == *.jpeg ]]; then
    convert "negotiatingsalary.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_negotiatingsalary.jpg"
    mv "optimized_negotiatingsalary.jpg" "negotiatingsalary.jpg"
elif [[ "negotiatingsalary.jpg" == *.png ]]; then
    convert "negotiatingsalary.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_negotiatingsalary.jpg"
    mv "optimized_negotiatingsalary.jpg" "negotiatingsalary.jpg"
fi
echo "Optimizing standingoutamongstpeers.jpg..."
# Backup original
cp "standingoutamongstpeers.jpg" "originals/standingoutamongstpeers.jpg"

if [[ "standingoutamongstpeers.jpg" == *.jpg ]] || [[ "standingoutamongstpeers.jpg" == *.jpeg ]]; then
    convert "standingoutamongstpeers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_standingoutamongstpeers.jpg"
    mv "optimized_standingoutamongstpeers.jpg" "standingoutamongstpeers.jpg"
elif [[ "standingoutamongstpeers.jpg" == *.png ]]; then
    convert "standingoutamongstpeers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_standingoutamongstpeers.jpg"
    mv "optimized_standingoutamongstpeers.jpg" "standingoutamongstpeers.jpg"
fi
echo "Optimizing communicationtechniques.jpg..."
# Backup original
cp "communicationtechniques.jpg" "originals/communicationtechniques.jpg"

if [[ "communicationtechniques.jpg" == *.jpg ]] || [[ "communicationtechniques.jpg" == *.jpeg ]]; then
    convert "communicationtechniques.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_communicationtechniques.jpg"
    mv "optimized_communicationtechniques.jpg" "communicationtechniques.jpg"
elif [[ "communicationtechniques.jpg" == *.png ]]; then
    convert "communicationtechniques.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_communicationtechniques.jpg"
    mv "optimized_communicationtechniques.jpg" "communicationtechniques.jpg"
fi
echo "Optimizing longdistancerelationship.jpg..."
# Backup original
cp "longdistancerelationship.jpg" "originals/longdistancerelationship.jpg"

if [[ "longdistancerelationship.jpg" == *.jpg ]] || [[ "longdistancerelationship.jpg" == *.jpeg ]]; then
    convert "longdistancerelationship.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_longdistancerelationship.jpg"
    mv "optimized_longdistancerelationship.jpg" "longdistancerelationship.jpg"
elif [[ "longdistancerelationship.jpg" == *.png ]]; then
    convert "longdistancerelationship.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_longdistancerelationship.jpg"
    mv "optimized_longdistancerelationship.jpg" "longdistancerelationship.jpg"
fi
echo "Optimizing familyrelationships.jpg..."
# Backup original
cp "familyrelationships.jpg" "originals/familyrelationships.jpg"

if [[ "familyrelationships.jpg" == *.jpg ]] || [[ "familyrelationships.jpg" == *.jpeg ]]; then
    convert "familyrelationships.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_familyrelationships.jpg"
    mv "optimized_familyrelationships.jpg" "familyrelationships.jpg"
elif [[ "familyrelationships.jpg" == *.png ]]; then
    convert "familyrelationships.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_familyrelationships.jpg"
    mv "optimized_familyrelationships.jpg" "familyrelationships.jpg"
fi
echo "Optimizing jobinterviewquestions.jpg..."
# Backup original
cp "jobinterviewquestions.jpg" "originals/jobinterviewquestions.jpg"

if [[ "jobinterviewquestions.jpg" == *.jpg ]] || [[ "jobinterviewquestions.jpg" == *.jpeg ]]; then
    convert "jobinterviewquestions.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_jobinterviewquestions.jpg"
    mv "optimized_jobinterviewquestions.jpg" "jobinterviewquestions.jpg"
elif [[ "jobinterviewquestions.jpg" == *.png ]]; then
    convert "jobinterviewquestions.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_jobinterviewquestions.jpg"
    mv "optimized_jobinterviewquestions.jpg" "jobinterviewquestions.jpg"
fi
echo "Optimizing jobrecruiter.jpg..."
# Backup original
cp "jobrecruiter.jpg" "originals/jobrecruiter.jpg"

if [[ "jobrecruiter.jpg" == *.jpg ]] || [[ "jobrecruiter.jpg" == *.jpeg ]]; then
    convert "jobrecruiter.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_jobrecruiter.jpg"
    mv "optimized_jobrecruiter.jpg" "jobrecruiter.jpg"
elif [[ "jobrecruiter.jpg" == *.png ]]; then
    convert "jobrecruiter.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_jobrecruiter.jpg"
    mv "optimized_jobrecruiter.jpg" "jobrecruiter.jpg"
fi
echo "Optimizing whentosaylove.jpg..."
# Backup original
cp "whentosaylove.jpg" "originals/whentosaylove.jpg"

if [[ "whentosaylove.jpg" == *.jpg ]] || [[ "whentosaylove.jpg" == *.jpeg ]]; then
    convert "whentosaylove.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_whentosaylove.jpg"
    mv "optimized_whentosaylove.jpg" "whentosaylove.jpg"
elif [[ "whentosaylove.jpg" == *.png ]]; then
    convert "whentosaylove.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_whentosaylove.jpg"
    mv "optimized_whentosaylove.jpg" "whentosaylove.jpg"
fi
echo "Optimizing creativedatespicnic.jpg..."
# Backup original
cp "creativedatespicnic.jpg" "originals/creativedatespicnic.jpg"

if [[ "creativedatespicnic.jpg" == *.jpg ]] || [[ "creativedatespicnic.jpg" == *.jpeg ]]; then
    convert "creativedatespicnic.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_creativedatespicnic.jpg"
    mv "optimized_creativedatespicnic.jpg" "creativedatespicnic.jpg"
elif [[ "creativedatespicnic.jpg" == *.png ]]; then
    convert "creativedatespicnic.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_creativedatespicnic.jpg"
    mv "optimized_creativedatespicnic.jpg" "creativedatespicnic.jpg"
fi
echo "Optimizing resolvingdisagreements.jpg..."
# Backup original
cp "resolvingdisagreements.jpg" "originals/resolvingdisagreements.jpg"

if [[ "resolvingdisagreements.jpg" == *.jpg ]] || [[ "resolvingdisagreements.jpg" == *.jpeg ]]; then
    convert "resolvingdisagreements.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resolvingdisagreements.jpg"
    mv "optimized_resolvingdisagreements.jpg" "resolvingdisagreements.jpg"
elif [[ "resolvingdisagreements.jpg" == *.png ]]; then
    convert "resolvingdisagreements.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resolvingdisagreements.jpg"
    mv "optimized_resolvingdisagreements.jpg" "resolvingdisagreements.jpg"
fi
echo "Optimizing friendstolovers.jpg..."
# Backup original
cp "friendstolovers.jpg" "originals/friendstolovers.jpg"

if [[ "friendstolovers.jpg" == *.jpg ]] || [[ "friendstolovers.jpg" == *.jpeg ]]; then
    convert "friendstolovers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_friendstolovers.jpg"
    mv "optimized_friendstolovers.jpg" "friendstolovers.jpg"
elif [[ "friendstolovers.jpg" == *.png ]]; then
    convert "friendstolovers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_friendstolovers.jpg"
    mv "optimized_friendstolovers.jpg" "friendstolovers.jpg"
fi
echo "Optimizing painfulbreakup.jpg..."
# Backup original
cp "painfulbreakup.jpg" "originals/painfulbreakup.jpg"

if [[ "painfulbreakup.jpg" == *.jpg ]] || [[ "painfulbreakup.jpg" == *.jpeg ]]; then
    convert "painfulbreakup.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_painfulbreakup.jpg"
    mv "optimized_painfulbreakup.jpg" "painfulbreakup.jpg"
elif [[ "painfulbreakup.jpg" == *.png ]]; then
    convert "painfulbreakup.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_painfulbreakup.jpg"
    mv "optimized_painfulbreakup.jpg" "painfulbreakup.jpg"
fi
echo "Optimizing coping-with-partner-mental-illness.jpg..."
# Backup original
cp "coping-with-partner-mental-illness.jpg" "originals/coping-with-partner-mental-illness.jpg"

if [[ "coping-with-partner-mental-illness.jpg" == *.jpg ]] || [[ "coping-with-partner-mental-illness.jpg" == *.jpeg ]]; then
    convert "coping-with-partner-mental-illness.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_coping-with-partner-mental-illness.jpg"
    mv "optimized_coping-with-partner-mental-illness.jpg" "coping-with-partner-mental-illness.jpg"
elif [[ "coping-with-partner-mental-illness.jpg" == *.png ]]; then
    convert "coping-with-partner-mental-illness.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_coping-with-partner-mental-illness.jpg"
    mv "optimized_coping-with-partner-mental-illness.jpg" "coping-with-partner-mental-illness.jpg"
fi
echo "Optimizing womansextingonphone.jpg..."
# Backup original
cp "womansextingonphone.jpg" "originals/womansextingonphone.jpg"

if [[ "womansextingonphone.jpg" == *.jpg ]] || [[ "womansextingonphone.jpg" == *.jpeg ]]; then
    convert "womansextingonphone.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_womansextingonphone.jpg"
    mv "optimized_womansextingonphone.jpg" "womansextingonphone.jpg"
elif [[ "womansextingonphone.jpg" == *.png ]]; then
    convert "womansextingonphone.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_womansextingonphone.jpg"
    mv "optimized_womansextingonphone.jpg" "womansextingonphone.jpg"
fi
echo "Optimizing relationshipsupportivepartner.jpg..."
# Backup original
cp "relationshipsupportivepartner.jpg" "originals/relationshipsupportivepartner.jpg"

if [[ "relationshipsupportivepartner.jpg" == *.jpg ]] || [[ "relationshipsupportivepartner.jpg" == *.jpeg ]]; then
    convert "relationshipsupportivepartner.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_relationshipsupportivepartner.jpg"
    mv "optimized_relationshipsupportivepartner.jpg" "relationshipsupportivepartner.jpg"
elif [[ "relationshipsupportivepartner.jpg" == *.png ]]; then
    convert "relationshipsupportivepartner.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_relationshipsupportivepartner.jpg"
    mv "optimized_relationshipsupportivepartner.jpg" "relationshipsupportivepartner.jpg"
fi
echo "Optimizing nurturing-meaningful-connections.jpg..."
# Backup original
cp "nurturing-meaningful-connections.jpg" "originals/nurturing-meaningful-connections.jpg"

if [[ "nurturing-meaningful-connections.jpg" == *.jpg ]] || [[ "nurturing-meaningful-connections.jpg" == *.jpeg ]]; then
    convert "nurturing-meaningful-connections.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_nurturing-meaningful-connections.jpg"
    mv "optimized_nurturing-meaningful-connections.jpg" "nurturing-meaningful-connections.jpg"
elif [[ "nurturing-meaningful-connections.jpg" == *.png ]]; then
    convert "nurturing-meaningful-connections.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_nurturing-meaningful-connections.jpg"
    mv "optimized_nurturing-meaningful-connections.jpg" "nurturing-meaningful-connections.jpg"
fi
echo "Optimizing forgivenessandbetrayal.jpg..."
# Backup original
cp "forgivenessandbetrayal.jpg" "originals/forgivenessandbetrayal.jpg"

if [[ "forgivenessandbetrayal.jpg" == *.jpg ]] || [[ "forgivenessandbetrayal.jpg" == *.jpeg ]]; then
    convert "forgivenessandbetrayal.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_forgivenessandbetrayal.jpg"
    mv "optimized_forgivenessandbetrayal.jpg" "forgivenessandbetrayal.jpg"
elif [[ "forgivenessandbetrayal.jpg" == *.png ]]; then
    convert "forgivenessandbetrayal.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_forgivenessandbetrayal.jpg"
    mv "optimized_forgivenessandbetrayal.jpg" "forgivenessandbetrayal.jpg"
fi
echo "Optimizing independence-and-intimacy.jpg..."
# Backup original
cp "independence-and-intimacy.jpg" "originals/independence-and-intimacy.jpg"

if [[ "independence-and-intimacy.jpg" == *.jpg ]] || [[ "independence-and-intimacy.jpg" == *.jpeg ]]; then
    convert "independence-and-intimacy.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_independence-and-intimacy.jpg"
    mv "optimized_independence-and-intimacy.jpg" "independence-and-intimacy.jpg"
elif [[ "independence-and-intimacy.jpg" == *.png ]]; then
    convert "independence-and-intimacy.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_independence-and-intimacy.jpg"
    mv "optimized_independence-and-intimacy.jpg" "independence-and-intimacy.jpg"
fi
echo "Optimizing artgalleriesoftheworld.jpg..."
# Backup original
cp "artgalleriesoftheworld.jpg" "originals/artgalleriesoftheworld.jpg"

if [[ "artgalleriesoftheworld.jpg" == *.jpg ]] || [[ "artgalleriesoftheworld.jpg" == *.jpeg ]]; then
    convert "artgalleriesoftheworld.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artgalleriesoftheworld.jpg"
    mv "optimized_artgalleriesoftheworld.jpg" "artgalleriesoftheworld.jpg"
elif [[ "artgalleriesoftheworld.jpg" == *.png ]]; then
    convert "artgalleriesoftheworld.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artgalleriesoftheworld.jpg"
    mv "optimized_artgalleriesoftheworld.jpg" "artgalleriesoftheworld.jpg"
fi
echo "Optimizing artistbrushescloseup.jpg..."
# Backup original
cp "artistbrushescloseup.jpg" "originals/artistbrushescloseup.jpg"

if [[ "artistbrushescloseup.jpg" == *.jpg ]] || [[ "artistbrushescloseup.jpg" == *.jpeg ]]; then
    convert "artistbrushescloseup.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artistbrushescloseup.jpg"
    mv "optimized_artistbrushescloseup.jpg" "artistbrushescloseup.jpg"
elif [[ "artistbrushescloseup.jpg" == *.png ]]; then
    convert "artistbrushescloseup.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artistbrushescloseup.jpg"
    mv "optimized_artistbrushescloseup.jpg" "artistbrushescloseup.jpg"
fi
echo "Optimizing establishingboundaries.jpg..."
# Backup original
cp "establishingboundaries.jpg" "originals/establishingboundaries.jpg"

if [[ "establishingboundaries.jpg" == *.jpg ]] || [[ "establishingboundaries.jpg" == *.jpeg ]]; then
    convert "establishingboundaries.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_establishingboundaries.jpg"
    mv "optimized_establishingboundaries.jpg" "establishingboundaries.jpg"
elif [[ "establishingboundaries.jpg" == *.png ]]; then
    convert "establishingboundaries.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_establishingboundaries.jpg"
    mv "optimized_establishingboundaries.jpg" "establishingboundaries.jpg"
fi
echo "Optimizing historyandevolutionofabstractart.jpg..."
# Backup original
cp "historyandevolutionofabstractart.jpg" "originals/historyandevolutionofabstractart.jpg"

if [[ "historyandevolutionofabstractart.jpg" == *.jpg ]] || [[ "historyandevolutionofabstractart.jpg" == *.jpeg ]]; then
    convert "historyandevolutionofabstractart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_historyandevolutionofabstractart.jpg"
    mv "optimized_historyandevolutionofabstractart.jpg" "historyandevolutionofabstractart.jpg"
elif [[ "historyandevolutionofabstractart.jpg" == *.png ]]; then
    convert "historyandevolutionofabstractart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_historyandevolutionofabstractart.jpg"
    mv "optimized_historyandevolutionofabstractart.jpg" "historyandevolutionofabstractart.jpg"
fi
echo "Optimizing emerging-art-styles.jpg..."
# Backup original
cp "emerging-art-styles.jpg" "originals/emerging-art-styles.jpg"

if [[ "emerging-art-styles.jpg" == *.jpg ]] || [[ "emerging-art-styles.jpg" == *.jpeg ]]; then
    convert "emerging-art-styles.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_emerging-art-styles.jpg"
    mv "optimized_emerging-art-styles.jpg" "emerging-art-styles.jpg"
elif [[ "emerging-art-styles.jpg" == *.png ]]; then
    convert "emerging-art-styles.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_emerging-art-styles.jpg"
    mv "optimized_emerging-art-styles.jpg" "emerging-art-styles.jpg"
fi
echo "Optimizing personal-finance-behavior.jpg..."
# Backup original
cp "personal-finance-behavior.jpg" "originals/personal-finance-behavior.jpg"

if [[ "personal-finance-behavior.jpg" == *.jpg ]] || [[ "personal-finance-behavior.jpg" == *.jpeg ]]; then
    convert "personal-finance-behavior.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_personal-finance-behavior.jpg"
    mv "optimized_personal-finance-behavior.jpg" "personal-finance-behavior.jpg"
elif [[ "personal-finance-behavior.jpg" == *.png ]]; then
    convert "personal-finance-behavior.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_personal-finance-behavior.jpg"
    mv "optimized_personal-finance-behavior.jpg" "personal-finance-behavior.jpg"
fi
echo "Optimizing followWomanPaintingWatercolor.jpg..."
# Backup original
cp "followWomanPaintingWatercolor.jpg" "originals/followWomanPaintingWatercolor.jpg"

if [[ "followWomanPaintingWatercolor.jpg" == *.jpg ]] || [[ "followWomanPaintingWatercolor.jpg" == *.jpeg ]]; then
    convert "followWomanPaintingWatercolor.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_followWomanPaintingWatercolor.jpg"
    mv "optimized_followWomanPaintingWatercolor.jpg" "followWomanPaintingWatercolor.jpg"
elif [[ "followWomanPaintingWatercolor.jpg" == *.png ]]; then
    convert "followWomanPaintingWatercolor.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_followWomanPaintingWatercolor.jpg"
    mv "optimized_followWomanPaintingWatercolor.jpg" "followWomanPaintingWatercolor.jpg"
fi
echo "Optimizing famousartinstallations.jpg..."
# Backup original
cp "famousartinstallations.jpg" "originals/famousartinstallations.jpg"

if [[ "famousartinstallations.jpg" == *.jpg ]] || [[ "famousartinstallations.jpg" == *.jpeg ]]; then
    convert "famousartinstallations.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_famousartinstallations.jpg"
    mv "optimized_famousartinstallations.jpg" "famousartinstallations.jpg"
elif [[ "famousartinstallations.jpg" == *.png ]]; then
    convert "famousartinstallations.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_famousartinstallations.jpg"
    mv "optimized_famousartinstallations.jpg" "famousartinstallations.jpg"
fi
echo "Optimizing journey-fresh-produce.jpg..."
# Backup original
cp "journey-fresh-produce.jpg" "originals/journey-fresh-produce.jpg"

if [[ "journey-fresh-produce.jpg" == *.jpg ]] || [[ "journey-fresh-produce.jpg" == *.jpeg ]]; then
    convert "journey-fresh-produce.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_journey-fresh-produce.jpg"
    mv "optimized_journey-fresh-produce.jpg" "journey-fresh-produce.jpg"
elif [[ "journey-fresh-produce.jpg" == *.png ]]; then
    convert "journey-fresh-produce.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_journey-fresh-produce.jpg"
    mv "optimized_journey-fresh-produce.jpg" "journey-fresh-produce.jpg"
fi
echo "Optimizing artofprintmaking.jpg..."
# Backup original
cp "artofprintmaking.jpg" "originals/artofprintmaking.jpg"

if [[ "artofprintmaking.jpg" == *.jpg ]] || [[ "artofprintmaking.jpg" == *.jpeg ]]; then
    convert "artofprintmaking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artofprintmaking.jpg"
    mv "optimized_artofprintmaking.jpg" "artofprintmaking.jpg"
elif [[ "artofprintmaking.jpg" == *.png ]]; then
    convert "artofprintmaking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_artofprintmaking.jpg"
    mv "optimized_artofprintmaking.jpg" "artofprintmaking.jpg"
fi
echo "Optimizing worldofstreetart.jpg..."
# Backup original
cp "worldofstreetart.jpg" "originals/worldofstreetart.jpg"

if [[ "worldofstreetart.jpg" == *.jpg ]] || [[ "worldofstreetart.jpg" == *.jpeg ]]; then
    convert "worldofstreetart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_worldofstreetart.jpg"
    mv "optimized_worldofstreetart.jpg" "worldofstreetart.jpg"
elif [[ "worldofstreetart.jpg" == *.png ]]; then
    convert "worldofstreetart.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_worldofstreetart.jpg"
    mv "optimized_worldofstreetart.jpg" "worldofstreetart.jpg"
fi
echo "Optimizing dishes-under-30-minutes.jpg..."
# Backup original
cp "dishes-under-30-minutes.jpg" "originals/dishes-under-30-minutes.jpg"

if [[ "dishes-under-30-minutes.jpg" == *.jpg ]] || [[ "dishes-under-30-minutes.jpg" == *.jpeg ]]; then
    convert "dishes-under-30-minutes.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_dishes-under-30-minutes.jpg"
    mv "optimized_dishes-under-30-minutes.jpg" "dishes-under-30-minutes.jpg"
elif [[ "dishes-under-30-minutes.jpg" == *.png ]]; then
    convert "dishes-under-30-minutes.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_dishes-under-30-minutes.jpg"
    mv "optimized_dishes-under-30-minutes.jpg" "dishes-under-30-minutes.jpg"
fi
echo "Optimizing art-of-homemade-pasta.jpg..."
# Backup original
cp "art-of-homemade-pasta.jpg" "originals/art-of-homemade-pasta.jpg"

if [[ "art-of-homemade-pasta.jpg" == *.jpg ]] || [[ "art-of-homemade-pasta.jpg" == *.jpeg ]]; then
    convert "art-of-homemade-pasta.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_art-of-homemade-pasta.jpg"
    mv "optimized_art-of-homemade-pasta.jpg" "art-of-homemade-pasta.jpg"
elif [[ "art-of-homemade-pasta.jpg" == *.png ]]; then
    convert "art-of-homemade-pasta.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_art-of-homemade-pasta.jpg"
    mv "optimized_art-of-homemade-pasta.jpg" "art-of-homemade-pasta.jpg"
fi
echo "Optimizing international-food-trends.jpg..."
# Backup original
cp "international-food-trends.jpg" "originals/international-food-trends.jpg"

if [[ "international-food-trends.jpg" == *.jpg ]] || [[ "international-food-trends.jpg" == *.jpeg ]]; then
    convert "international-food-trends.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_international-food-trends.jpg"
    mv "optimized_international-food-trends.jpg" "international-food-trends.jpg"
elif [[ "international-food-trends.jpg" == *.png ]]; then
    convert "international-food-trends.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_international-food-trends.jpg"
    mv "optimized_international-food-trends.jpg" "international-food-trends.jpg"
fi
echo "Optimizing foodgasm.jpg..."
# Backup original
cp "foodgasm.jpg" "originals/foodgasm.jpg"

if [[ "foodgasm.jpg" == *.jpg ]] || [[ "foodgasm.jpg" == *.jpeg ]]; then
    convert "foodgasm.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_foodgasm.jpg"
    mv "optimized_foodgasm.jpg" "foodgasm.jpg"
elif [[ "foodgasm.jpg" == *.png ]]; then
    convert "foodgasm.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_foodgasm.jpg"
    mv "optimized_foodgasm.jpg" "foodgasm.jpg"
fi
echo "Optimizing boy-eating-umami-fries.jpg..."
# Backup original
cp "boy-eating-umami-fries.jpg" "originals/boy-eating-umami-fries.jpg"

if [[ "boy-eating-umami-fries.jpg" == *.jpg ]] || [[ "boy-eating-umami-fries.jpg" == *.jpeg ]]; then
    convert "boy-eating-umami-fries.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_boy-eating-umami-fries.jpg"
    mv "optimized_boy-eating-umami-fries.jpg" "boy-eating-umami-fries.jpg"
elif [[ "boy-eating-umami-fries.jpg" == *.png ]]; then
    convert "boy-eating-umami-fries.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_boy-eating-umami-fries.jpg"
    mv "optimized_boy-eating-umami-fries.jpg" "boy-eating-umami-fries.jpg"
fi
echo "Optimizing differentpencilshades.jpg..."
# Backup original
cp "differentpencilshades.jpg" "originals/differentpencilshades.jpg"

if [[ "differentpencilshades.jpg" == *.jpg ]] || [[ "differentpencilshades.jpg" == *.jpeg ]]; then
    convert "differentpencilshades.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_differentpencilshades.jpg"
    mv "optimized_differentpencilshades.jpg" "differentpencilshades.jpg"
elif [[ "differentpencilshades.jpg" == *.png ]]; then
    convert "differentpencilshades.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_differentpencilshades.jpg"
    mv "optimized_differentpencilshades.jpg" "differentpencilshades.jpg"
fi
echo "Optimizing exploring-umami.jpg..."
# Backup original
cp "exploring-umami.jpg" "originals/exploring-umami.jpg"

if [[ "exploring-umami.jpg" == *.jpg ]] || [[ "exploring-umami.jpg" == *.jpeg ]]; then
    convert "exploring-umami.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_exploring-umami.jpg"
    mv "optimized_exploring-umami.jpg" "exploring-umami.jpg"
elif [[ "exploring-umami.jpg" == *.png ]]; then
    convert "exploring-umami.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_exploring-umami.jpg"
    mv "optimized_exploring-umami.jpg" "exploring-umami.jpg"
fi
echo "Optimizing preparing-meals-with-kitchen-leftovers.jpg..."
# Backup original
cp "preparing-meals-with-kitchen-leftovers.jpg" "originals/preparing-meals-with-kitchen-leftovers.jpg"

if [[ "preparing-meals-with-kitchen-leftovers.jpg" == *.jpg ]] || [[ "preparing-meals-with-kitchen-leftovers.jpg" == *.jpeg ]]; then
    convert "preparing-meals-with-kitchen-leftovers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_preparing-meals-with-kitchen-leftovers.jpg"
    mv "optimized_preparing-meals-with-kitchen-leftovers.jpg" "preparing-meals-with-kitchen-leftovers.jpg"
elif [[ "preparing-meals-with-kitchen-leftovers.jpg" == *.png ]]; then
    convert "preparing-meals-with-kitchen-leftovers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_preparing-meals-with-kitchen-leftovers.jpg"
    mv "optimized_preparing-meals-with-kitchen-leftovers.jpg" "preparing-meals-with-kitchen-leftovers.jpg"
fi
echo "Optimizing commonriskfactorsincryptocurrency.jpg..."
# Backup original
cp "commonriskfactorsincryptocurrency.jpg" "originals/commonriskfactorsincryptocurrency.jpg"

if [[ "commonriskfactorsincryptocurrency.jpg" == *.jpg ]] || [[ "commonriskfactorsincryptocurrency.jpg" == *.jpeg ]]; then
    convert "commonriskfactorsincryptocurrency.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_commonriskfactorsincryptocurrency.jpg"
    mv "optimized_commonriskfactorsincryptocurrency.jpg" "commonriskfactorsincryptocurrency.jpg"
elif [[ "commonriskfactorsincryptocurrency.jpg" == *.png ]]; then
    convert "commonriskfactorsincryptocurrency.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_commonriskfactorsincryptocurrency.jpg"
    mv "optimized_commonriskfactorsincryptocurrency.jpg" "commonriskfactorsincryptocurrency.jpg"
fi
echo "Optimizing bitcoin-forecast.jpg..."
# Backup original
cp "bitcoin-forecast.jpg" "originals/bitcoin-forecast.jpg"

if [[ "bitcoin-forecast.jpg" == *.jpg ]] || [[ "bitcoin-forecast.jpg" == *.jpeg ]]; then
    convert "bitcoin-forecast.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_bitcoin-forecast.jpg"
    mv "optimized_bitcoin-forecast.jpg" "bitcoin-forecast.jpg"
elif [[ "bitcoin-forecast.jpg" == *.png ]]; then
    convert "bitcoin-forecast.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_bitcoin-forecast.jpg"
    mv "optimized_bitcoin-forecast.jpg" "bitcoin-forecast.jpg"
fi
echo "Optimizing masterfulinking.jpg..."
# Backup original
cp "masterfulinking.jpg" "originals/masterfulinking.jpg"

if [[ "masterfulinking.jpg" == *.jpg ]] || [[ "masterfulinking.jpg" == *.jpeg ]]; then
    convert "masterfulinking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_masterfulinking.jpg"
    mv "optimized_masterfulinking.jpg" "masterfulinking.jpg"
elif [[ "masterfulinking.jpg" == *.png ]]; then
    convert "masterfulinking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_masterfulinking.jpg"
    mv "optimized_masterfulinking.jpg" "masterfulinking.jpg"
fi
echo "Optimizing bitcoincashforecast.jpg..."
# Backup original
cp "bitcoincashforecast.jpg" "originals/bitcoincashforecast.jpg"

if [[ "bitcoincashforecast.jpg" == *.jpg ]] || [[ "bitcoincashforecast.jpg" == *.jpeg ]]; then
    convert "bitcoincashforecast.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_bitcoincashforecast.jpg"
    mv "optimized_bitcoincashforecast.jpg" "bitcoincashforecast.jpg"
elif [[ "bitcoincashforecast.jpg" == *.png ]]; then
    convert "bitcoincashforecast.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_bitcoincashforecast.jpg"
    mv "optimized_bitcoincashforecast.jpg" "bitcoincashforecast.jpg"
fi
echo "Optimizing cryptocurrency-risk-management.jpg..."
# Backup original
cp "cryptocurrency-risk-management.jpg" "originals/cryptocurrency-risk-management.jpg"

if [[ "cryptocurrency-risk-management.jpg" == *.jpg ]] || [[ "cryptocurrency-risk-management.jpg" == *.jpeg ]]; then
    convert "cryptocurrency-risk-management.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_cryptocurrency-risk-management.jpg"
    mv "optimized_cryptocurrency-risk-management.jpg" "cryptocurrency-risk-management.jpg"
elif [[ "cryptocurrency-risk-management.jpg" == *.png ]]; then
    convert "cryptocurrency-risk-management.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_cryptocurrency-risk-management.jpg"
    mv "optimized_cryptocurrency-risk-management.jpg" "cryptocurrency-risk-management.jpg"
fi
echo "Optimizing blockchain-industry.jpg..."
# Backup original
cp "blockchain-industry.jpg" "originals/blockchain-industry.jpg"

if [[ "blockchain-industry.jpg" == *.jpg ]] || [[ "blockchain-industry.jpg" == *.jpeg ]]; then
    convert "blockchain-industry.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-industry.jpg"
    mv "optimized_blockchain-industry.jpg" "blockchain-industry.jpg"
elif [[ "blockchain-industry.jpg" == *.png ]]; then
    convert "blockchain-industry.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-industry.jpg"
    mv "optimized_blockchain-industry.jpg" "blockchain-industry.jpg"
fi
echo "Optimizing blockchain-hash.jpg..."
# Backup original
cp "blockchain-hash.jpg" "originals/blockchain-hash.jpg"

if [[ "blockchain-hash.jpg" == *.jpg ]] || [[ "blockchain-hash.jpg" == *.jpeg ]]; then
    convert "blockchain-hash.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-hash.jpg"
    mv "optimized_blockchain-hash.jpg" "blockchain-hash.jpg"
elif [[ "blockchain-hash.jpg" == *.png ]]; then
    convert "blockchain-hash.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-hash.jpg"
    mv "optimized_blockchain-hash.jpg" "blockchain-hash.jpg"
fi
echo "Optimizing woman-crypto-investing-reddit.jpg..."
# Backup original
cp "woman-crypto-investing-reddit.jpg" "originals/woman-crypto-investing-reddit.jpg"

if [[ "woman-crypto-investing-reddit.jpg" == *.jpg ]] || [[ "woman-crypto-investing-reddit.jpg" == *.jpeg ]]; then
    convert "woman-crypto-investing-reddit.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_woman-crypto-investing-reddit.jpg"
    mv "optimized_woman-crypto-investing-reddit.jpg" "woman-crypto-investing-reddit.jpg"
elif [[ "woman-crypto-investing-reddit.jpg" == *.png ]]; then
    convert "woman-crypto-investing-reddit.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_woman-crypto-investing-reddit.jpg"
    mv "optimized_woman-crypto-investing-reddit.jpg" "woman-crypto-investing-reddit.jpg"
fi
echo "Optimizing 10-reasons-invest-cryptocurrency.jpg..."
# Backup original
cp "10-reasons-invest-cryptocurrency.jpg" "originals/10-reasons-invest-cryptocurrency.jpg"

if [[ "10-reasons-invest-cryptocurrency.jpg" == *.jpg ]] || [[ "10-reasons-invest-cryptocurrency.jpg" == *.jpeg ]]; then
    convert "10-reasons-invest-cryptocurrency.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_10-reasons-invest-cryptocurrency.jpg"
    mv "optimized_10-reasons-invest-cryptocurrency.jpg" "10-reasons-invest-cryptocurrency.jpg"
elif [[ "10-reasons-invest-cryptocurrency.jpg" == *.png ]]; then
    convert "10-reasons-invest-cryptocurrency.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_10-reasons-invest-cryptocurrency.jpg"
    mv "optimized_10-reasons-invest-cryptocurrency.jpg" "10-reasons-invest-cryptocurrency.jpg"
fi
echo "Optimizing blockchain-three-advantages.jpg..."
# Backup original
cp "blockchain-three-advantages.jpg" "originals/blockchain-three-advantages.jpg"

if [[ "blockchain-three-advantages.jpg" == *.jpg ]] || [[ "blockchain-three-advantages.jpg" == *.jpeg ]]; then
    convert "blockchain-three-advantages.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-three-advantages.jpg"
    mv "optimized_blockchain-three-advantages.jpg" "blockchain-three-advantages.jpg"
elif [[ "blockchain-three-advantages.jpg" == *.png ]]; then
    convert "blockchain-three-advantages.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-three-advantages.jpg"
    mv "optimized_blockchain-three-advantages.jpg" "blockchain-three-advantages.jpg"
fi
echo "Optimizing resume-writing-workshop.jpg..."
# Backup original
cp "resume-writing-workshop.jpg" "originals/resume-writing-workshop.jpg"

if [[ "resume-writing-workshop.jpg" == *.jpg ]] || [[ "resume-writing-workshop.jpg" == *.jpeg ]]; then
    convert "resume-writing-workshop.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-writing-workshop.jpg"
    mv "optimized_resume-writing-workshop.jpg" "resume-writing-workshop.jpg"
elif [[ "resume-writing-workshop.jpg" == *.png ]]; then
    convert "resume-writing-workshop.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-writing-workshop.jpg"
    mv "optimized_resume-writing-workshop.jpg" "resume-writing-workshop.jpg"
fi
echo "Optimizing resume-writing-101.jpg..."
# Backup original
cp "resume-writing-101.jpg" "originals/resume-writing-101.jpg"

if [[ "resume-writing-101.jpg" == *.jpg ]] || [[ "resume-writing-101.jpg" == *.jpeg ]]; then
    convert "resume-writing-101.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-writing-101.jpg"
    mv "optimized_resume-writing-101.jpg" "resume-writing-101.jpg"
elif [[ "resume-writing-101.jpg" == *.png ]]; then
    convert "resume-writing-101.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-writing-101.jpg"
    mv "optimized_resume-writing-101.jpg" "resume-writing-101.jpg"
fi
echo "Optimizing benefits-of-blockchain.jpg..."
# Backup original
cp "benefits-of-blockchain.jpg" "originals/benefits-of-blockchain.jpg"

if [[ "benefits-of-blockchain.jpg" == *.jpg ]] || [[ "benefits-of-blockchain.jpg" == *.jpeg ]]; then
    convert "benefits-of-blockchain.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_benefits-of-blockchain.jpg"
    mv "optimized_benefits-of-blockchain.jpg" "benefits-of-blockchain.jpg"
elif [[ "benefits-of-blockchain.jpg" == *.png ]]; then
    convert "benefits-of-blockchain.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_benefits-of-blockchain.jpg"
    mv "optimized_benefits-of-blockchain.jpg" "benefits-of-blockchain.jpg"
fi
echo "Optimizing technical-writing-resume.jpg..."
# Backup original
cp "technical-writing-resume.jpg" "originals/technical-writing-resume.jpg"

if [[ "technical-writing-resume.jpg" == *.jpg ]] || [[ "technical-writing-resume.jpg" == *.jpeg ]]; then
    convert "technical-writing-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_technical-writing-resume.jpg"
    mv "optimized_technical-writing-resume.jpg" "technical-writing-resume.jpg"
elif [[ "technical-writing-resume.jpg" == *.png ]]; then
    convert "technical-writing-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_technical-writing-resume.jpg"
    mv "optimized_technical-writing-resume.jpg" "technical-writing-resume.jpg"
fi
echo "Optimizing supplychainfinanceblockchain.jpg..."
# Backup original
cp "supplychainfinanceblockchain.jpg" "originals/supplychainfinanceblockchain.jpg"

if [[ "supplychainfinanceblockchain.jpg" == *.jpg ]] || [[ "supplychainfinanceblockchain.jpg" == *.jpeg ]]; then
    convert "supplychainfinanceblockchain.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_supplychainfinanceblockchain.jpg"
    mv "optimized_supplychainfinanceblockchain.jpg" "supplychainfinanceblockchain.jpg"
elif [[ "supplychainfinanceblockchain.jpg" == *.png ]]; then
    convert "supplychainfinanceblockchain.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_supplychainfinanceblockchain.jpg"
    mv "optimized_supplychainfinanceblockchain.jpg" "supplychainfinanceblockchain.jpg"
fi
echo "Optimizing college-to-career-resume.jpg..."
# Backup original
cp "college-to-career-resume.jpg" "originals/college-to-career-resume.jpg"

if [[ "college-to-career-resume.jpg" == *.jpg ]] || [[ "college-to-career-resume.jpg" == *.jpeg ]]; then
    convert "college-to-career-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_college-to-career-resume.jpg"
    mv "optimized_college-to-career-resume.jpg" "college-to-career-resume.jpg"
elif [[ "college-to-career-resume.jpg" == *.png ]]; then
    convert "college-to-career-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_college-to-career-resume.jpg"
    mv "optimized_college-to-career-resume.jpg" "college-to-career-resume.jpg"
fi
echo "Optimizing resume-layout.jpg..."
# Backup original
cp "resume-layout.jpg" "originals/resume-layout.jpg"

if [[ "resume-layout.jpg" == *.jpg ]] || [[ "resume-layout.jpg" == *.jpeg ]]; then
    convert "resume-layout.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-layout.jpg"
    mv "optimized_resume-layout.jpg" "resume-layout.jpg"
elif [[ "resume-layout.jpg" == *.png ]]; then
    convert "resume-layout.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-layout.jpg"
    mv "optimized_resume-layout.jpg" "resume-layout.jpg"
fi
echo "Optimizing modern-resume.jpg..."
# Backup original
cp "modern-resume.jpg" "originals/modern-resume.jpg"

if [[ "modern-resume.jpg" == *.jpg ]] || [[ "modern-resume.jpg" == *.jpeg ]]; then
    convert "modern-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_modern-resume.jpg"
    mv "optimized_modern-resume.jpg" "modern-resume.jpg"
elif [[ "modern-resume.jpg" == *.png ]]; then
    convert "modern-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_modern-resume.jpg"
    mv "optimized_modern-resume.jpg" "modern-resume.jpg"
fi
echo "Optimizing woman-writing-stellar-resume.jpg..."
# Backup original
cp "woman-writing-stellar-resume.jpg" "originals/woman-writing-stellar-resume.jpg"

if [[ "woman-writing-stellar-resume.jpg" == *.jpg ]] || [[ "woman-writing-stellar-resume.jpg" == *.jpeg ]]; then
    convert "woman-writing-stellar-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_woman-writing-stellar-resume.jpg"
    mv "optimized_woman-writing-stellar-resume.jpg" "woman-writing-stellar-resume.jpg"
elif [[ "woman-writing-stellar-resume.jpg" == *.png ]]; then
    convert "woman-writing-stellar-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_woman-writing-stellar-resume.jpg"
    mv "optimized_woman-writing-stellar-resume.jpg" "woman-writing-stellar-resume.jpg"
fi
echo "Optimizing optimizing-your-resume-for-ats-systems.jpg..."
# Backup original
cp "optimizing-your-resume-for-ats-systems.jpg" "originals/optimizing-your-resume-for-ats-systems.jpg"

if [[ "optimizing-your-resume-for-ats-systems.jpg" == *.jpg ]] || [[ "optimizing-your-resume-for-ats-systems.jpg" == *.jpeg ]]; then
    convert "optimizing-your-resume-for-ats-systems.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_optimizing-your-resume-for-ats-systems.jpg"
    mv "optimized_optimizing-your-resume-for-ats-systems.jpg" "optimizing-your-resume-for-ats-systems.jpg"
elif [[ "optimizing-your-resume-for-ats-systems.jpg" == *.png ]]; then
    convert "optimizing-your-resume-for-ats-systems.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_optimizing-your-resume-for-ats-systems.jpg"
    mv "optimized_optimizing-your-resume-for-ats-systems.jpg" "optimizing-your-resume-for-ats-systems.jpg"
fi
echo "Optimizing employment-gaps-in-your-resume.jpg..."
# Backup original
cp "employment-gaps-in-your-resume.jpg" "originals/employment-gaps-in-your-resume.jpg"

if [[ "employment-gaps-in-your-resume.jpg" == *.jpg ]] || [[ "employment-gaps-in-your-resume.jpg" == *.jpeg ]]; then
    convert "employment-gaps-in-your-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_employment-gaps-in-your-resume.jpg"
    mv "optimized_employment-gaps-in-your-resume.jpg" "employment-gaps-in-your-resume.jpg"
elif [[ "employment-gaps-in-your-resume.jpg" == *.png ]]; then
    convert "employment-gaps-in-your-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_employment-gaps-in-your-resume.jpg"
    mv "optimized_employment-gaps-in-your-resume.jpg" "employment-gaps-in-your-resume.jpg"
fi
echo "Optimizing resume-elevator-pitch.jpg..."
# Backup original
cp "resume-elevator-pitch.jpg" "originals/resume-elevator-pitch.jpg"

if [[ "resume-elevator-pitch.jpg" == *.jpg ]] || [[ "resume-elevator-pitch.jpg" == *.jpeg ]]; then
    convert "resume-elevator-pitch.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-elevator-pitch.jpg"
    mv "optimized_resume-elevator-pitch.jpg" "resume-elevator-pitch.jpg"
elif [[ "resume-elevator-pitch.jpg" == *.png ]]; then
    convert "resume-elevator-pitch.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_resume-elevator-pitch.jpg"
    mv "optimized_resume-elevator-pitch.jpg" "resume-elevator-pitch.jpg"
fi
echo "Optimizing action-verbs-for-resume-success.jpg..."
# Backup original
cp "action-verbs-for-resume-success.jpg" "originals/action-verbs-for-resume-success.jpg"

if [[ "action-verbs-for-resume-success.jpg" == *.jpg ]] || [[ "action-verbs-for-resume-success.jpg" == *.jpeg ]]; then
    convert "action-verbs-for-resume-success.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_action-verbs-for-resume-success.jpg"
    mv "optimized_action-verbs-for-resume-success.jpg" "action-verbs-for-resume-success.jpg"
elif [[ "action-verbs-for-resume-success.jpg" == *.png ]]; then
    convert "action-verbs-for-resume-success.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_action-verbs-for-resume-success.jpg"
    mv "optimized_action-verbs-for-resume-success.jpg" "action-verbs-for-resume-success.jpg"
fi
echo "Optimizing tailored-resume.jpg..."
# Backup original
cp "tailored-resume.jpg" "originals/tailored-resume.jpg"

if [[ "tailored-resume.jpg" == *.jpg ]] || [[ "tailored-resume.jpg" == *.jpeg ]]; then
    convert "tailored-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_tailored-resume.jpg"
    mv "optimized_tailored-resume.jpg" "tailored-resume.jpg"
elif [[ "tailored-resume.jpg" == *.png ]]; then
    convert "tailored-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_tailored-resume.jpg"
    mv "optimized_tailored-resume.jpg" "tailored-resume.jpg"
fi
echo "Optimizing visual-resumes.jpg..."
# Backup original
cp "visual-resumes.jpg" "originals/visual-resumes.jpg"

if [[ "visual-resumes.jpg" == *.jpg ]] || [[ "visual-resumes.jpg" == *.jpeg ]]; then
    convert "visual-resumes.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_visual-resumes.jpg"
    mv "optimized_visual-resumes.jpg" "visual-resumes.jpg"
elif [[ "visual-resumes.jpg" == *.png ]]; then
    convert "visual-resumes.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_visual-resumes.jpg"
    mv "optimized_visual-resumes.jpg" "visual-resumes.jpg"
fi
echo "Optimizing executive-interview-preparation.jpg..."
# Backup original
cp "executive-interview-preparation.jpg" "originals/executive-interview-preparation.jpg"

if [[ "executive-interview-preparation.jpg" == *.jpg ]] || [[ "executive-interview-preparation.jpg" == *.jpeg ]]; then
    convert "executive-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_executive-interview-preparation.jpg"
    mv "optimized_executive-interview-preparation.jpg" "executive-interview-preparation.jpg"
elif [[ "executive-interview-preparation.jpg" == *.png ]]; then
    convert "executive-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_executive-interview-preparation.jpg"
    mv "optimized_executive-interview-preparation.jpg" "executive-interview-preparation.jpg"
fi
echo "Optimizing prepare-for-screening-interview.jpg..."
# Backup original
cp "prepare-for-screening-interview.jpg" "originals/prepare-for-screening-interview.jpg"

if [[ "prepare-for-screening-interview.jpg" == *.jpg ]] || [[ "prepare-for-screening-interview.jpg" == *.jpeg ]]; then
    convert "prepare-for-screening-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_prepare-for-screening-interview.jpg"
    mv "optimized_prepare-for-screening-interview.jpg" "prepare-for-screening-interview.jpg"
elif [[ "prepare-for-screening-interview.jpg" == *.png ]]; then
    convert "prepare-for-screening-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_prepare-for-screening-interview.jpg"
    mv "optimized_prepare-for-screening-interview.jpg" "prepare-for-screening-interview.jpg"
fi
echo "Optimizing overprepare-for-interview.jpg..."
# Backup original
cp "overprepare-for-interview.jpg" "originals/overprepare-for-interview.jpg"

if [[ "overprepare-for-interview.jpg" == *.jpg ]] || [[ "overprepare-for-interview.jpg" == *.jpeg ]]; then
    convert "overprepare-for-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_overprepare-for-interview.jpg"
    mv "optimized_overprepare-for-interview.jpg" "overprepare-for-interview.jpg"
elif [[ "overprepare-for-interview.jpg" == *.png ]]; then
    convert "overprepare-for-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_overprepare-for-interview.jpg"
    mv "optimized_overprepare-for-interview.jpg" "overprepare-for-interview.jpg"
fi
echo "Optimizing internship-interview-preparation.jpg..."
# Backup original
cp "internship-interview-preparation.jpg" "originals/internship-interview-preparation.jpg"

if [[ "internship-interview-preparation.jpg" == *.jpg ]] || [[ "internship-interview-preparation.jpg" == *.jpeg ]]; then
    convert "internship-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_internship-interview-preparation.jpg"
    mv "optimized_internship-interview-preparation.jpg" "internship-interview-preparation.jpg"
elif [[ "internship-interview-preparation.jpg" == *.png ]]; then
    convert "internship-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_internship-interview-preparation.jpg"
    mv "optimized_internship-interview-preparation.jpg" "internship-interview-preparation.jpg"
fi
echo "Optimizing how-to-network-with-recruiters-on-linkedin.jpg..."
# Backup original
cp "how-to-network-with-recruiters-on-linkedin.jpg" "originals/how-to-network-with-recruiters-on-linkedin.jpg"

if [[ "how-to-network-with-recruiters-on-linkedin.jpg" == *.jpg ]] || [[ "how-to-network-with-recruiters-on-linkedin.jpg" == *.jpeg ]]; then
    convert "how-to-network-with-recruiters-on-linkedin.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-network-with-recruiters-on-linkedin.jpg"
    mv "optimized_how-to-network-with-recruiters-on-linkedin.jpg" "how-to-network-with-recruiters-on-linkedin.jpg"
elif [[ "how-to-network-with-recruiters-on-linkedin.jpg" == *.png ]]; then
    convert "how-to-network-with-recruiters-on-linkedin.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-network-with-recruiters-on-linkedin.jpg"
    mv "optimized_how-to-network-with-recruiters-on-linkedin.jpg" "how-to-network-with-recruiters-on-linkedin.jpg"
fi
echo "Optimizing remote-interview-preparation.jpg..."
# Backup original
cp "remote-interview-preparation.jpg" "originals/remote-interview-preparation.jpg"

if [[ "remote-interview-preparation.jpg" == *.jpg ]] || [[ "remote-interview-preparation.jpg" == *.jpeg ]]; then
    convert "remote-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_remote-interview-preparation.jpg"
    mv "optimized_remote-interview-preparation.jpg" "remote-interview-preparation.jpg"
elif [[ "remote-interview-preparation.jpg" == *.png ]]; then
    convert "remote-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_remote-interview-preparation.jpg"
    mv "optimized_remote-interview-preparation.jpg" "remote-interview-preparation.jpg"
fi
echo "Optimizing how-to-grow-your-linkedin-network.jpg..."
# Backup original
cp "how-to-grow-your-linkedin-network.jpg" "originals/how-to-grow-your-linkedin-network.jpg"

if [[ "how-to-grow-your-linkedin-network.jpg" == *.jpg ]] || [[ "how-to-grow-your-linkedin-network.jpg" == *.jpeg ]]; then
    convert "how-to-grow-your-linkedin-network.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-grow-your-linkedin-network.jpg"
    mv "optimized_how-to-grow-your-linkedin-network.jpg" "how-to-grow-your-linkedin-network.jpg"
elif [[ "how-to-grow-your-linkedin-network.jpg" == *.png ]]; then
    convert "how-to-grow-your-linkedin-network.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-grow-your-linkedin-network.jpg"
    mv "optimized_how-to-grow-your-linkedin-network.jpg" "how-to-grow-your-linkedin-network.jpg"
fi
echo "Optimizing how-to-improve-your-networking-skills.jpg..."
# Backup original
cp "how-to-improve-your-networking-skills.jpg" "originals/how-to-improve-your-networking-skills.jpg"

if [[ "how-to-improve-your-networking-skills.jpg" == *.jpg ]] || [[ "how-to-improve-your-networking-skills.jpg" == *.jpeg ]]; then
    convert "how-to-improve-your-networking-skills.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-improve-your-networking-skills.jpg"
    mv "optimized_how-to-improve-your-networking-skills.jpg" "how-to-improve-your-networking-skills.jpg"
elif [[ "how-to-improve-your-networking-skills.jpg" == *.png ]]; then
    convert "how-to-improve-your-networking-skills.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-improve-your-networking-skills.jpg"
    mv "optimized_how-to-improve-your-networking-skills.jpg" "how-to-improve-your-networking-skills.jpg"
fi
echo "Optimizing preparing-for-second-interview.jpg..."
# Backup original
cp "preparing-for-second-interview.jpg" "originals/preparing-for-second-interview.jpg"

if [[ "preparing-for-second-interview.jpg" == *.jpg ]] || [[ "preparing-for-second-interview.jpg" == *.jpeg ]]; then
    convert "preparing-for-second-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_preparing-for-second-interview.jpg"
    mv "optimized_preparing-for-second-interview.jpg" "preparing-for-second-interview.jpg"
elif [[ "preparing-for-second-interview.jpg" == *.png ]]; then
    convert "preparing-for-second-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_preparing-for-second-interview.jpg"
    mv "optimized_preparing-for-second-interview.jpg" "preparing-for-second-interview.jpg"
fi
echo "Optimizing meeting-new-contacts.jpg..."
# Backup original
cp "meeting-new-contacts.jpg" "originals/meeting-new-contacts.jpg"

if [[ "meeting-new-contacts.jpg" == *.jpg ]] || [[ "meeting-new-contacts.jpg" == *.jpeg ]]; then
    convert "meeting-new-contacts.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_meeting-new-contacts.jpg"
    mv "optimized_meeting-new-contacts.jpg" "meeting-new-contacts.jpg"
elif [[ "meeting-new-contacts.jpg" == *.png ]]; then
    convert "meeting-new-contacts.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_meeting-new-contacts.jpg"
    mv "optimized_meeting-new-contacts.jpg" "meeting-new-contacts.jpg"
fi
echo "Optimizing schmoozing101.jpg..."
# Backup original
cp "schmoozing101.jpg" "originals/schmoozing101.jpg"

if [[ "schmoozing101.jpg" == *.jpg ]] || [[ "schmoozing101.jpg" == *.jpeg ]]; then
    convert "schmoozing101.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_schmoozing101.jpg"
    mv "optimized_schmoozing101.jpg" "schmoozing101.jpg"
elif [[ "schmoozing101.jpg" == *.png ]]; then
    convert "schmoozing101.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_schmoozing101.jpg"
    mv "optimized_schmoozing101.jpg" "schmoozing101.jpg"
fi
echo "Optimizing music-industry-networking-events.jpg..."
# Backup original
cp "music-industry-networking-events.jpg" "originals/music-industry-networking-events.jpg"

if [[ "music-industry-networking-events.jpg" == *.jpg ]] || [[ "music-industry-networking-events.jpg" == *.jpeg ]]; then
    convert "music-industry-networking-events.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_music-industry-networking-events.jpg"
    mv "optimized_music-industry-networking-events.jpg" "music-industry-networking-events.jpg"
elif [[ "music-industry-networking-events.jpg" == *.png ]]; then
    convert "music-industry-networking-events.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_music-industry-networking-events.jpg"
    mv "optimized_music-industry-networking-events.jpg" "music-industry-networking-events.jpg"
fi
echo "Optimizing largest-alumni-network.jpg..."
# Backup original
cp "largest-alumni-network.jpg" "originals/largest-alumni-network.jpg"

if [[ "largest-alumni-network.jpg" == *.jpg ]] || [[ "largest-alumni-network.jpg" == *.jpeg ]]; then
    convert "largest-alumni-network.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_largest-alumni-network.jpg"
    mv "optimized_largest-alumni-network.jpg" "largest-alumni-network.jpg"
elif [[ "largest-alumni-network.jpg" == *.png ]]; then
    convert "largest-alumni-network.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_largest-alumni-network.jpg"
    mv "optimized_largest-alumni-network.jpg" "largest-alumni-network.jpg"
fi
echo "Optimizing online-networking-events.jpg..."
# Backup original
cp "online-networking-events.jpg" "originals/online-networking-events.jpg"

if [[ "online-networking-events.jpg" == *.jpg ]] || [[ "online-networking-events.jpg" == *.jpeg ]]; then
    convert "online-networking-events.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_online-networking-events.jpg"
    mv "optimized_online-networking-events.jpg" "online-networking-events.jpg"
elif [[ "online-networking-events.jpg" == *.png ]]; then
    convert "online-networking-events.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_online-networking-events.jpg"
    mv "optimized_online-networking-events.jpg" "online-networking-events.jpg"
fi
echo "Optimizing professional-networking-sites-for-jobs.jpg..."
# Backup original
cp "professional-networking-sites-for-jobs.jpg" "originals/professional-networking-sites-for-jobs.jpg"

if [[ "professional-networking-sites-for-jobs.jpg" == *.jpg ]] || [[ "professional-networking-sites-for-jobs.jpg" == *.jpeg ]]; then
    convert "professional-networking-sites-for-jobs.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_professional-networking-sites-for-jobs.jpg"
    mv "optimized_professional-networking-sites-for-jobs.jpg" "professional-networking-sites-for-jobs.jpg"
elif [[ "professional-networking-sites-for-jobs.jpg" == *.png ]]; then
    convert "professional-networking-sites-for-jobs.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_professional-networking-sites-for-jobs.jpg"
    mv "optimized_professional-networking-sites-for-jobs.jpg" "professional-networking-sites-for-jobs.jpg"
fi
echo "Optimizing fms-virtual-networking-tips.jpg..."
# Backup original
cp "fms-virtual-networking-tips.jpg" "originals/fms-virtual-networking-tips.jpg"

if [[ "fms-virtual-networking-tips.jpg" == *.jpg ]] || [[ "fms-virtual-networking-tips.jpg" == *.jpeg ]]; then
    convert "fms-virtual-networking-tips.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-virtual-networking-tips.jpg"
    mv "optimized_fms-virtual-networking-tips.jpg" "fms-virtual-networking-tips.jpg"
elif [[ "fms-virtual-networking-tips.jpg" == *.png ]]; then
    convert "fms-virtual-networking-tips.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-virtual-networking-tips.jpg"
    mv "optimized_fms-virtual-networking-tips.jpg" "fms-virtual-networking-tips.jpg"
fi
echo "Optimizing how-to-network-at-events.jpg..."
# Backup original
cp "how-to-network-at-events.jpg" "originals/how-to-network-at-events.jpg"

if [[ "how-to-network-at-events.jpg" == *.jpg ]] || [[ "how-to-network-at-events.jpg" == *.jpeg ]]; then
    convert "how-to-network-at-events.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-network-at-events.jpg"
    mv "optimized_how-to-network-at-events.jpg" "how-to-network-at-events.jpg"
elif [[ "how-to-network-at-events.jpg" == *.png ]]; then
    convert "how-to-network-at-events.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_how-to-network-at-events.jpg"
    mv "optimized_how-to-network-at-events.jpg" "how-to-network-at-events.jpg"
fi
echo "Optimizing networking-for-young-professionals.jpg..."
# Backup original
cp "networking-for-young-professionals.jpg" "originals/networking-for-young-professionals.jpg"

if [[ "networking-for-young-professionals.jpg" == *.jpg ]] || [[ "networking-for-young-professionals.jpg" == *.jpeg ]]; then
    convert "networking-for-young-professionals.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networking-for-young-professionals.jpg"
    mv "optimized_networking-for-young-professionals.jpg" "networking-for-young-professionals.jpg"
elif [[ "networking-for-young-professionals.jpg" == *.png ]]; then
    convert "networking-for-young-professionals.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networking-for-young-professionals.jpg"
    mv "optimized_networking-for-young-professionals.jpg" "networking-for-young-professionals.jpg"
fi
echo "Optimizing networking-for-introverts.jpg..."
# Backup original
cp "networking-for-introverts.jpg" "originals/networking-for-introverts.jpg"

if [[ "networking-for-introverts.jpg" == *.jpg ]] || [[ "networking-for-introverts.jpg" == *.jpeg ]]; then
    convert "networking-for-introverts.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networking-for-introverts.jpg"
    mv "optimized_networking-for-introverts.jpg" "networking-for-introverts.jpg"
elif [[ "networking-for-introverts.jpg" == *.png ]]; then
    convert "networking-for-introverts.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networking-for-introverts.jpg"
    mv "optimized_networking-for-introverts.jpg" "networking-for-introverts.jpg"
fi
echo "Optimizing what-to-do-at-a-networking-event.jpg..."
# Backup original
cp "what-to-do-at-a-networking-event.jpg" "originals/what-to-do-at-a-networking-event.jpg"

if [[ "what-to-do-at-a-networking-event.jpg" == *.jpg ]] || [[ "what-to-do-at-a-networking-event.jpg" == *.jpeg ]]; then
    convert "what-to-do-at-a-networking-event.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_what-to-do-at-a-networking-event.jpg"
    mv "optimized_what-to-do-at-a-networking-event.jpg" "what-to-do-at-a-networking-event.jpg"
elif [[ "what-to-do-at-a-networking-event.jpg" == *.png ]]; then
    convert "what-to-do-at-a-networking-event.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_what-to-do-at-a-networking-event.jpg"
    mv "optimized_what-to-do-at-a-networking-event.jpg" "what-to-do-at-a-networking-event.jpg"
fi
echo "Optimizing in-person-networking.jpg..."
# Backup original
cp "in-person-networking.jpg" "originals/in-person-networking.jpg"

if [[ "in-person-networking.jpg" == *.jpg ]] || [[ "in-person-networking.jpg" == *.jpeg ]]; then
    convert "in-person-networking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_in-person-networking.jpg"
    mv "optimized_in-person-networking.jpg" "in-person-networking.jpg"
elif [[ "in-person-networking.jpg" == *.png ]]; then
    convert "in-person-networking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_in-person-networking.jpg"
    mv "optimized_in-person-networking.jpg" "in-person-networking.jpg"
fi
echo "Optimizing networking-strategies.jpg..."
# Backup original
cp "networking-strategies.jpg" "originals/networking-strategies.jpg"

if [[ "networking-strategies.jpg" == *.jpg ]] || [[ "networking-strategies.jpg" == *.jpeg ]]; then
    convert "networking-strategies.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networking-strategies.jpg"
    mv "optimized_networking-strategies.jpg" "networking-strategies.jpg"
elif [[ "networking-strategies.jpg" == *.png ]]; then
    convert "networking-strategies.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networking-strategies.jpg"
    mv "optimized_networking-strategies.jpg" "networking-strategies.jpg"
fi
echo "Optimizing fms-how-to-prepare-for-a-video-interview.jpg..."
# Backup original
cp "fms-how-to-prepare-for-a-video-interview.jpg" "originals/fms-how-to-prepare-for-a-video-interview.jpg"

if [[ "fms-how-to-prepare-for-a-video-interview.jpg" == *.jpg ]] || [[ "fms-how-to-prepare-for-a-video-interview.jpg" == *.jpeg ]]; then
    convert "fms-how-to-prepare-for-a-video-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-how-to-prepare-for-a-video-interview.jpg"
    mv "optimized_fms-how-to-prepare-for-a-video-interview.jpg" "fms-how-to-prepare-for-a-video-interview.jpg"
elif [[ "fms-how-to-prepare-for-a-video-interview.jpg" == *.png ]]; then
    convert "fms-how-to-prepare-for-a-video-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-how-to-prepare-for-a-video-interview.jpg"
    mv "optimized_fms-how-to-prepare-for-a-video-interview.jpg" "fms-how-to-prepare-for-a-video-interview.jpg"
fi
echo "Optimizing fms-interview-preparation-checklist.jpg..."
# Backup original
cp "fms-interview-preparation-checklist.jpg" "originals/fms-interview-preparation-checklist.jpg"

if [[ "fms-interview-preparation-checklist.jpg" == *.jpg ]] || [[ "fms-interview-preparation-checklist.jpg" == *.jpeg ]]; then
    convert "fms-interview-preparation-checklist.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-interview-preparation-checklist.jpg"
    mv "optimized_fms-interview-preparation-checklist.jpg" "fms-interview-preparation-checklist.jpg"
elif [[ "fms-interview-preparation-checklist.jpg" == *.png ]]; then
    convert "fms-interview-preparation-checklist.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-interview-preparation-checklist.jpg"
    mv "optimized_fms-interview-preparation-checklist.jpg" "fms-interview-preparation-checklist.jpg"
fi
echo "Optimizing job-interview-questions-and-answers.jpg..."
# Backup original
cp "job-interview-questions-and-answers.jpg" "originals/job-interview-questions-and-answers.jpg"

if [[ "job-interview-questions-and-answers.jpg" == *.jpg ]] || [[ "job-interview-questions-and-answers.jpg" == *.jpeg ]]; then
    convert "job-interview-questions-and-answers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_job-interview-questions-and-answers.jpg"
    mv "optimized_job-interview-questions-and-answers.jpg" "job-interview-questions-and-answers.jpg"
elif [[ "job-interview-questions-and-answers.jpg" == *.png ]]; then
    convert "job-interview-questions-and-answers.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_job-interview-questions-and-answers.jpg"
    mv "optimized_job-interview-questions-and-answers.jpg" "job-interview-questions-and-answers.jpg"
fi
echo "Optimizing standing-out-in-a-group-interview.jpg..."
# Backup original
cp "standing-out-in-a-group-interview.jpg" "originals/standing-out-in-a-group-interview.jpg"

if [[ "standing-out-in-a-group-interview.jpg" == *.jpg ]] || [[ "standing-out-in-a-group-interview.jpg" == *.jpeg ]]; then
    convert "standing-out-in-a-group-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_standing-out-in-a-group-interview.jpg"
    mv "optimized_standing-out-in-a-group-interview.jpg" "standing-out-in-a-group-interview.jpg"
elif [[ "standing-out-in-a-group-interview.jpg" == *.png ]]; then
    convert "standing-out-in-a-group-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_standing-out-in-a-group-interview.jpg"
    mv "optimized_standing-out-in-a-group-interview.jpg" "standing-out-in-a-group-interview.jpg"
fi
echo "Optimizing phone-screen-interview.jpg..."
# Backup original
cp "phone-screen-interview.jpg" "originals/phone-screen-interview.jpg"

if [[ "phone-screen-interview.jpg" == *.jpg ]] || [[ "phone-screen-interview.jpg" == *.jpeg ]]; then
    convert "phone-screen-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_phone-screen-interview.jpg"
    mv "optimized_phone-screen-interview.jpg" "phone-screen-interview.jpg"
elif [[ "phone-screen-interview.jpg" == *.png ]]; then
    convert "phone-screen-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_phone-screen-interview.jpg"
    mv "optimized_phone-screen-interview.jpg" "phone-screen-interview.jpg"
fi
echo "Optimizing navigating-a-panel-interview.jpg..."
# Backup original
cp "navigating-a-panel-interview.jpg" "originals/navigating-a-panel-interview.jpg"

if [[ "navigating-a-panel-interview.jpg" == *.jpg ]] || [[ "navigating-a-panel-interview.jpg" == *.jpeg ]]; then
    convert "navigating-a-panel-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_navigating-a-panel-interview.jpg"
    mv "optimized_navigating-a-panel-interview.jpg" "navigating-a-panel-interview.jpg"
elif [[ "navigating-a-panel-interview.jpg" == *.png ]]; then
    convert "navigating-a-panel-interview.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_navigating-a-panel-interview.jpg"
    mv "optimized_navigating-a-panel-interview.jpg" "navigating-a-panel-interview.jpg"
fi
echo "Optimizing behavioral-interview-preparation.jpg..."
# Backup original
cp "behavioral-interview-preparation.jpg" "originals/behavioral-interview-preparation.jpg"

if [[ "behavioral-interview-preparation.jpg" == *.jpg ]] || [[ "behavioral-interview-preparation.jpg" == *.jpeg ]]; then
    convert "behavioral-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_behavioral-interview-preparation.jpg"
    mv "optimized_behavioral-interview-preparation.jpg" "behavioral-interview-preparation.jpg"
elif [[ "behavioral-interview-preparation.jpg" == *.png ]]; then
    convert "behavioral-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_behavioral-interview-preparation.jpg"
    mv "optimized_behavioral-interview-preparation.jpg" "behavioral-interview-preparation.jpg"
fi
echo "Optimizing technical-interview-preparation.jpg..."
# Backup original
cp "technical-interview-preparation.jpg" "originals/technical-interview-preparation.jpg"

if [[ "technical-interview-preparation.jpg" == *.jpg ]] || [[ "technical-interview-preparation.jpg" == *.jpeg ]]; then
    convert "technical-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_technical-interview-preparation.jpg"
    mv "optimized_technical-interview-preparation.jpg" "technical-interview-preparation.jpg"
elif [[ "technical-interview-preparation.jpg" == *.png ]]; then
    convert "technical-interview-preparation.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_technical-interview-preparation.jpg"
    mv "optimized_technical-interview-preparation.jpg" "technical-interview-preparation.jpg"
fi
echo "Optimizing fms-job-search-strategies.jpg..."
# Backup original
cp "fms-job-search-strategies.jpg" "originals/fms-job-search-strategies.jpg"

if [[ "fms-job-search-strategies.jpg" == *.jpg ]] || [[ "fms-job-search-strategies.jpg" == *.jpeg ]]; then
    convert "fms-job-search-strategies.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-job-search-strategies.jpg"
    mv "optimized_fms-job-search-strategies.jpg" "fms-job-search-strategies.jpg"
elif [[ "fms-job-search-strategies.jpg" == *.png ]]; then
    convert "fms-job-search-strategies.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fms-job-search-strategies.jpg"
    mv "optimized_fms-job-search-strategies.jpg" "fms-job-search-strategies.jpg"
fi
echo "Optimizing re-inventing-personal-brand.jpg..."
# Backup original
cp "re-inventing-personal-brand.jpg" "originals/re-inventing-personal-brand.jpg"

if [[ "re-inventing-personal-brand.jpg" == *.jpg ]] || [[ "re-inventing-personal-brand.jpg" == *.jpeg ]]; then
    convert "re-inventing-personal-brand.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_re-inventing-personal-brand.jpg"
    mv "optimized_re-inventing-personal-brand.jpg" "re-inventing-personal-brand.jpg"
elif [[ "re-inventing-personal-brand.jpg" == *.png ]]; then
    convert "re-inventing-personal-brand.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_re-inventing-personal-brand.jpg"
    mv "optimized_re-inventing-personal-brand.jpg" "re-inventing-personal-brand.jpg"
fi
echo "Optimizing blockchain-in-personal-banking.jpg..."
# Backup original
cp "blockchain-in-personal-banking.jpg" "originals/blockchain-in-personal-banking.jpg"

if [[ "blockchain-in-personal-banking.jpg" == *.jpg ]] || [[ "blockchain-in-personal-banking.jpg" == *.jpeg ]]; then
    convert "blockchain-in-personal-banking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-in-personal-banking.jpg"
    mv "optimized_blockchain-in-personal-banking.jpg" "blockchain-in-personal-banking.jpg"
elif [[ "blockchain-in-personal-banking.jpg" == *.png ]]; then
    convert "blockchain-in-personal-banking.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_blockchain-in-personal-banking.jpg"
    mv "optimized_blockchain-in-personal-banking.jpg" "blockchain-in-personal-banking.jpg"
fi
echo "Optimizing wiriting-cover-letter.jpg..."
# Backup original
cp "wiriting-cover-letter.jpg" "originals/wiriting-cover-letter.jpg"

if [[ "wiriting-cover-letter.jpg" == *.jpg ]] || [[ "wiriting-cover-letter.jpg" == *.jpeg ]]; then
    convert "wiriting-cover-letter.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_wiriting-cover-letter.jpg"
    mv "optimized_wiriting-cover-letter.jpg" "wiriting-cover-letter.jpg"
elif [[ "wiriting-cover-letter.jpg" == *.png ]]; then
    convert "wiriting-cover-letter.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_wiriting-cover-letter.jpg"
    mv "optimized_wiriting-cover-letter.jpg" "wiriting-cover-letter.jpg"
fi
echo "Optimizing crafting-a-resume.jpg..."
# Backup original
cp "crafting-a-resume.jpg" "originals/crafting-a-resume.jpg"

if [[ "crafting-a-resume.jpg" == *.jpg ]] || [[ "crafting-a-resume.jpg" == *.jpeg ]]; then
    convert "crafting-a-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_crafting-a-resume.jpg"
    mv "optimized_crafting-a-resume.jpg" "crafting-a-resume.jpg"
elif [[ "crafting-a-resume.jpg" == *.png ]]; then
    convert "crafting-a-resume.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_crafting-a-resume.jpg"
    mv "optimized_crafting-a-resume.jpg" "crafting-a-resume.jpg"
fi
echo "Optimizing masteringworkplacecommunication.jpg..."
# Backup original
cp "masteringworkplacecommunication.jpg" "originals/masteringworkplacecommunication.jpg"

if [[ "masteringworkplacecommunication.jpg" == *.jpg ]] || [[ "masteringworkplacecommunication.jpg" == *.jpeg ]]; then
    convert "masteringworkplacecommunication.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_masteringworkplacecommunication.jpg"
    mv "optimized_masteringworkplacecommunication.jpg" "masteringworkplacecommunication.jpg"
elif [[ "masteringworkplacecommunication.jpg" == *.png ]]; then
    convert "masteringworkplacecommunication.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_masteringworkplacecommunication.jpg"
    mv "optimized_masteringworkplacecommunication.jpg" "masteringworkplacecommunication.jpg"
fi
echo "Optimizing networkingninja.jpg..."
# Backup original
cp "networkingninja.jpg" "originals/networkingninja.jpg"

if [[ "networkingninja.jpg" == *.jpg ]] || [[ "networkingninja.jpg" == *.jpeg ]]; then
    convert "networkingninja.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networkingninja.jpg"
    mv "optimized_networkingninja.jpg" "networkingninja.jpg"
elif [[ "networkingninja.jpg" == *.png ]]; then
    convert "networkingninja.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_networkingninja.jpg"
    mv "optimized_networkingninja.jpg" "networkingninja.jpg"
fi
echo "Optimizing work-life-balance.jpg..."
# Backup original
cp "work-life-balance.jpg" "originals/work-life-balance.jpg"

if [[ "work-life-balance.jpg" == *.jpg ]] || [[ "work-life-balance.jpg" == *.jpeg ]]; then
    convert "work-life-balance.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_work-life-balance.jpg"
    mv "optimized_work-life-balance.jpg" "work-life-balance.jpg"
elif [[ "work-life-balance.jpg" == *.png ]]; then
    convert "work-life-balance.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_work-life-balance.jpg"
    mv "optimized_work-life-balance.jpg" "work-life-balance.jpg"
fi
echo "Optimizing advancing-within-your-own-company.jpg..."
# Backup original
cp "advancing-within-your-own-company.jpg" "originals/advancing-within-your-own-company.jpg"

if [[ "advancing-within-your-own-company.jpg" == *.jpg ]] || [[ "advancing-within-your-own-company.jpg" == *.jpeg ]]; then
    convert "advancing-within-your-own-company.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_advancing-within-your-own-company.jpg"
    mv "optimized_advancing-within-your-own-company.jpg" "advancing-within-your-own-company.jpg"
elif [[ "advancing-within-your-own-company.jpg" == *.png ]]; then
    convert "advancing-within-your-own-company.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_advancing-within-your-own-company.jpg"
    mv "optimized_advancing-within-your-own-company.jpg" "advancing-within-your-own-company.jpg"
fi
echo "Optimizing art-of-self-promotion.jpg..."
# Backup original
cp "art-of-self-promotion.jpg" "originals/art-of-self-promotion.jpg"

if [[ "art-of-self-promotion.jpg" == *.jpg ]] || [[ "art-of-self-promotion.jpg" == *.jpeg ]]; then
    convert "art-of-self-promotion.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_art-of-self-promotion.jpg"
    mv "optimized_art-of-self-promotion.jpg" "art-of-self-promotion.jpg"
elif [[ "art-of-self-promotion.jpg" == *.png ]]; then
    convert "art-of-self-promotion.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_art-of-self-promotion.jpg"
    mv "optimized_art-of-self-promotion.jpg" "art-of-self-promotion.jpg"
fi
echo "Optimizing effective-leader.jpg..."
# Backup original
cp "effective-leader.jpg" "originals/effective-leader.jpg"

if [[ "effective-leader.jpg" == *.jpg ]] || [[ "effective-leader.jpg" == *.jpeg ]]; then
    convert "effective-leader.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_effective-leader.jpg"
    mv "optimized_effective-leader.jpg" "effective-leader.jpg"
elif [[ "effective-leader.jpg" == *.png ]]; then
    convert "effective-leader.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_effective-leader.jpg"
    mv "optimized_effective-leader.jpg" "effective-leader.jpg"
fi
echo "Optimizing personalizedcareerdevelopmentplan.jpg..."
# Backup original
cp "personalizedcareerdevelopmentplan.jpg" "originals/personalizedcareerdevelopmentplan.jpg"

if [[ "personalizedcareerdevelopmentplan.jpg" == *.jpg ]] || [[ "personalizedcareerdevelopmentplan.jpg" == *.jpeg ]]; then
    convert "personalizedcareerdevelopmentplan.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_personalizedcareerdevelopmentplan.jpg"
    mv "optimized_personalizedcareerdevelopmentplan.jpg" "personalizedcareerdevelopmentplan.jpg"
elif [[ "personalizedcareerdevelopmentplan.jpg" == *.png ]]; then
    convert "personalizedcareerdevelopmentplan.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_personalizedcareerdevelopmentplan.jpg"
    mv "optimized_personalizedcareerdevelopmentplan.jpg" "personalizedcareerdevelopmentplan.jpg"
fi
echo "Optimizing fmsCareerChange101.jpg..."
# Backup original
cp "fmsCareerChange101.jpg" "originals/fmsCareerChange101.jpg"

if [[ "fmsCareerChange101.jpg" == *.jpg ]] || [[ "fmsCareerChange101.jpg" == *.jpeg ]]; then
    convert "fmsCareerChange101.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fmsCareerChange101.jpg"
    mv "optimized_fmsCareerChange101.jpg" "fmsCareerChange101.jpg"
elif [[ "fmsCareerChange101.jpg" == *.png ]]; then
    convert "fmsCareerChange101.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fmsCareerChange101.jpg"
    mv "optimized_fmsCareerChange101.jpg" "fmsCareerChange101.jpg"
fi
echo "Optimizing fmsYoungManCafeLaptopJobSearch.jpg..."
# Backup original
cp "fmsYoungManCafeLaptopJobSearch.jpg" "originals/fmsYoungManCafeLaptopJobSearch.jpg"

if [[ "fmsYoungManCafeLaptopJobSearch.jpg" == *.jpg ]] || [[ "fmsYoungManCafeLaptopJobSearch.jpg" == *.jpeg ]]; then
    convert "fmsYoungManCafeLaptopJobSearch.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fmsYoungManCafeLaptopJobSearch.jpg"
    mv "optimized_fmsYoungManCafeLaptopJobSearch.jpg" "fmsYoungManCafeLaptopJobSearch.jpg"
elif [[ "fmsYoungManCafeLaptopJobSearch.jpg" == *.png ]]; then
    convert "fmsYoungManCafeLaptopJobSearch.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fmsYoungManCafeLaptopJobSearch.jpg"
    mv "optimized_fmsYoungManCafeLaptopJobSearch.jpg" "fmsYoungManCafeLaptopJobSearch.jpg"
fi
echo "Optimizing fmsThrivingRemoteJobOpportunities.jpg..."
# Backup original
cp "fmsThrivingRemoteJobOpportunities.jpg" "originals/fmsThrivingRemoteJobOpportunities.jpg"

if [[ "fmsThrivingRemoteJobOpportunities.jpg" == *.jpg ]] || [[ "fmsThrivingRemoteJobOpportunities.jpg" == *.jpeg ]]; then
    convert "fmsThrivingRemoteJobOpportunities.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fmsThrivingRemoteJobOpportunities.jpg"
    mv "optimized_fmsThrivingRemoteJobOpportunities.jpg" "fmsThrivingRemoteJobOpportunities.jpg"
elif [[ "fmsThrivingRemoteJobOpportunities.jpg" == *.png ]]; then
    convert "fmsThrivingRemoteJobOpportunities.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_fmsThrivingRemoteJobOpportunities.jpg"
    mv "optimized_fmsThrivingRemoteJobOpportunities.jpg" "fmsThrivingRemoteJobOpportunities.jpg"
fi
echo "Optimizing robot-cosplay-job-fair.jpg..."
# Backup original
cp "robot-cosplay-job-fair.jpg" "originals/robot-cosplay-job-fair.jpg"

if [[ "robot-cosplay-job-fair.jpg" == *.jpg ]] || [[ "robot-cosplay-job-fair.jpg" == *.jpeg ]]; then
    convert "robot-cosplay-job-fair.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_robot-cosplay-job-fair.jpg"
    mv "optimized_robot-cosplay-job-fair.jpg" "robot-cosplay-job-fair.jpg"
elif [[ "robot-cosplay-job-fair.jpg" == *.png ]]; then
    convert "robot-cosplay-job-fair.jpg" -quality 85 -strip -resize "1200x1200>" "optimized_robot-cosplay-job-fair.jpg"
    mv "optimized_robot-cosplay-job-fair.jpg" "robot-cosplay-job-fair.jpg"
fi

echo "✅ Image optimization complete!"
echo "📊 Optimized 153 images"
echo "📁 Originals saved in: public/images/articles/originals/"
echo "🎯 Images resized to max 1200px width/height, 85% quality"
