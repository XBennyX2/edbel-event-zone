import os
import glob
import json
from PIL import Image
import numpy as np

os.makedirs('public/assets/images/events', exist_ok=True)
os.makedirs('public/assets/images/branding', exist_ok=True)
os.makedirs('src/data', exist_ok=True)

# List of screenshot images that need clean cropping
SCREENSHOT_CROPS = {
    'photo_11_2026-11-12_11-43-49.jpg': (0, 96, 591, 1200),
    'photo_12_2026-11-12_11-43-49.jpg': (0, 110, 1080, 2200),
    'photo_14_2026-11-12_11-43-49.jpg': (0, 100, 1080, 2210),
    'photo_15_2026-11-12_11-43-49.jpg': (0, 100, 1080, 2210),
    'photo_16_2026-11-12_11-43-49.jpg': (0, 100, 1080, 2210),
    'photo_17_2026-11-12_11-43-49.jpg': (0, 100, 1080, 2210),
    'photo_18_2026-11-12_11-43-49.jpg': (0, 100, 1080, 2210),
    'photo_21_2026-11-12_11-43-49.jpg': (0, 110, 576, 1200),
    'photo_22_2026-11-12_11-43-49.jpg': (0, 110, 576, 1200),
    'photo_23_2026-11-12_11-43-49.jpg': (0, 110, 576, 1200),
    'photo_37_2026-11-12_11-43-49.jpg': (0, 0, 1080, 1370), # crop bottom dots
    'photo_1_2026-11-12_11-43-49.jpg': (0, 0, 960, 1280),
    'FB_IMG_1748633989427.jpg': (0, 0, 1080, 720),
    'photo_40_2026-11-12_11-43-09.jpg': (0, 0, 1080, 720),
    'photo_36_2026-11-12_11-43-49.jpg': (0, 0, 1080, 720),
}

# Catalog mapping
CATALOG = {
    'IMG_20240618_215125_911.jpg': {
        'title': 'Grand Luxury Ballroom Stage & Dance Floor',
        'amharicTitle': 'ታላቁ የሰርግ አዳራሽ መድረክ ዝግጅት',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Monumental 5-star wedding ballroom production featuring crystal rain chandeliers, halo fixtures, triple arched floral backdrop, and polished dance floor.',
        'featured': True,
        'tags': ['Ballroom', 'Stage Production', 'Crystal Chandeliers', 'Luxury Wedding']
    },
    'photo_33_2026-11-12_11-43-49.jpg': {
        'title': 'Triple Arch Floral Ballroom Symphony',
        'amharicTitle': 'ባለ ሶስት ቅስት የአበባ መድረክ ድምቀት',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Bespoke triple floral arch canopy integrated with dynamic LED ambiance and lush white rose stage borders.',
        'featured': True,
        'tags': ['Triple Arch', 'Floral Architecture', 'Grand Ballroom']
    },
    'photo_34_2026-11-12_11-43-49.jpg': {
        'title': 'Two-Story Atrium Cascading Floral Stage',
        'amharicTitle': 'የአትሪየም ተንጠልጣይ የአበባ ዲዛይን',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Multi-level atrium transformation with floating floral beams, waterfall chandeliers, rose-gold LED visuals, and velvet VIP lounge seating.',
        'featured': True,
        'tags': ['Atrium', 'Suspended Florals', 'LED Visuals', 'VIP Stage']
    },
    'FB_IMG_1717410568221.jpg': {
        'title': 'Royal Palace Wedding Stage with Golden Thrones',
        'amharicTitle': 'የወርቅ ዙፋን እና የጣሪያ አበባ ስራ',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Lavish wedding stage with full suspended wisteria ceiling cloud, grand crystal chandelier, and royal ornate golden throne chairs.',
        'featured': True,
        'tags': ['Royal Thrones', 'Ceiling Installation', 'Wisteria', 'Mirrored Floor']
    },
    'photo_7_2026-11-12_11-43-49.jpg': {
        'title': 'VIP Bridal Table with Wisteria Pergola',
        'amharicTitle': 'የክብር እንግዶች ማዕድ እና የአበባ ጣሪያ',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Intimate VIP banquet setup under a cascading white wisteria floral pergola with full blush flower wall and golden Chiavari seating.',
        'featured': True,
        'tags': ['VIP Table', 'Wisteria Pergola', 'Flower Wall', 'Gold Chairs']
    },
    'photo_9_2026-11-12_11-43-49.jpg': {
        'title': 'Opulent Reception Dining Suite',
        'amharicTitle': 'የተሟላ የግብዣ አዳራሽ ማዕድ ዲዛይን',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Full panoramic view of the cascading wisteria dining canopy, gold candelabras, and crystal illuminated hall.',
        'featured': False,
        'tags': ['Banquet', 'Table Styling', 'Wisteria Canopy']
    },
    'photo_8_2026-11-12_11-43-49.jpg': {
        'title': 'Passionate Red Rose Floral Tunnel Dining',
        'amharicTitle': 'የቀይ ጽጌረዳ የአበባ ዋሻ ማዕድ ዝግጅት',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Dramatically styled VIP dinner table enveloped in a deep red rose floral arch tunnel, mirrored gold tables, and black velvet chairs.',
        'featured': True,
        'tags': ['Red Roses', 'Floral Tunnel', 'Luxury Dining', 'Mirrored Table']
    },
    'photo_15_2026-11-12_11-43-49.jpg': {
        'title': 'Grand Marquee Pavilion Wedding Setup',
        'amharicTitle': 'ታላቁ የድንኳን ሰርግ እና የቻንደሊየር ድምቀት',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Full-span luxury marquee tent draped in gold & ivory silks with a central line of crystal chandeliers and fresh manicured lawn.',
        'featured': False,
        'tags': ['Marquee Pavilion', 'Tent Draping', 'Chandeliers', 'Wedding Tent']
    },
    'photo_18_2026-11-12_11-43-49.jpg': {
        'title': 'Dusty Rose & Champagne Tent Pavilion',
        'amharicTitle': 'የሮዝ ጎልድ እና ሻምፓኝ የድንኳን መድረክ',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Architectural curved drapery partitions in dusty rose and champagne gold with elevated couple stage and floral clouds.',
        'featured': False,
        'tags': ['Curved Draping', 'Dusty Rose', 'Tent Wedding']
    },
    'photo_19_2026-11-12_11-43-49.jpg': {
        'title': 'Contemporary Geometric Arch Stage',
        'amharicTitle': 'ዘመናዊ የጂኦሜትሪክ መድረክ ዲዛይን',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'Modern minimalist wedding stage with brass geometric arch frames, turquoise ambient backlight, and shell tufted sofa.',
        'featured': False,
        'tags': ['Geometric Arch', 'Modern Wedding', 'Ambient Lighting']
    },
    'photo_20_2026-11-12_11-43-49.jpg': {
        'title': 'Blossom Garden Couple Sweetheart Stage',
        'amharicTitle': 'የጥንዶች የፍቅር መቀመጫ እና የአበባ ዛፎች',
        'category': 'weddings',
        'categoryLabel': 'Weddings & Receptions',
        'description': 'White plush sweetheart seating flanked by towering blooming blossom trees and delicate sheer curtain swag.',
        'featured': False,
        'tags': ['Sweetheart Stage', 'Blossom Trees', 'Outdoor Garden']
    },
    'photo_2_2026-11-12_11-43-49.jpg': {
        'title': 'Panoramic Sunset Proposal with Glowing Heart',
        'amharicTitle': 'የመሸት ሰማይ የፍቅር ጥያቄ መድረክ',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Breathtaking open-air proposal installation overlooking the city skyline at dusk, complete with a massive white floral heart and glowing neon.',
        'featured': True,
        'tags': ['Proposal', 'Heart Arch', 'Neon Sign', 'Skyline View', 'Candle Pillars']
    },
    'photo_3_2026-11-12_11-43-49.jpg': {
        'title': 'Sunset Gazebo "Will You Marry Me?" Experience',
        'amharicTitle': 'የፍቅር ቃል ኪዳን የጋዜቦ ዝግጅት',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Gazebo romantic setting with ambient pillar candles, floral clouds, champagne table, and romantic dusk atmosphere.',
        'featured': False,
        'tags': ['Proposal Gazebo', 'Sunset', 'Romantic Candles']
    },
    'photo_4_2026-11-12_11-43-49.jpg': {
        'title': 'The Magical "Yes!" Moment',
        'amharicTitle': 'የእውነተኛ ፍቅር ጥያቄ አስደሳች ቅጽበት',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Capturing pure romantic joy: an authentic proposal celebration meticulously styled by Edbel Event Zone.',
        'featured': True,
        'tags': ['Real Proposal', 'Emotional Moment', 'Client Celebration']
    },
    'photo_5_2026-11-12_11-43-49.jpg': {
        'title': '3D "MARRY ME?" White Floral & Red Rose Heart',
        'amharicTitle': 'የቀይ ጽጌረዳ ልብ እና 3D የፍቅር ፊደላት',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Giant floral heart arch, illuminated 3D Marry Me lettering, plush white rug, and hand-placed red rose petal heart on the floor.',
        'featured': True,
        'tags': ['3D Letters', 'Rose Petal Heart', 'Indoor Proposal']
    },
    'photo_35_2026-11-12_11-43-49.jpg': {
        'title': 'Luxury Penthouse Skyline Night Proposal',
        'amharicTitle': 'የከፍተኛ ፎቅ የከተማ እይታ የፍቅር ጥያቄ',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'High-rise floor-to-ceiling panoramic city lights backdrop with a glowing neon floral heart and scattered white petals.',
        'featured': True,
        'tags': ['Penthouse', 'City Lights', 'Floral Heart', 'Luxury Proposal']
    },
    'photo_38_2026-11-12_11-43-49.jpg': {
        'title': 'Bohemian Red Rose & Fairy Light Proposal Sanctuary',
        'amharicTitle': 'የሻማ እና የጽጌረዳ የፍቅር ምሽት ዝግጅት',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Intimate low-table romantic dinner setting surrounded by twinkling fairy lights, red rose heart arch, candelabras, and velvet floor cushions.',
        'featured': True,
        'tags': ['Fairy Lights', 'Intimate Dinner', 'Red Roses', 'Candelabras']
    },
    '20230711_210414.jpg': {
        'title': 'Garden Terrace Sunset Proposal Dinner',
        'amharicTitle': 'የውጭ ግቢ የፍቅር እራት እና የአበባ ልብ',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Outdoor terrace celebration with hanging Edison bulb garland, red rose heart backdrop, banquet dining, and mountain horizon.',
        'featured': True,
        'tags': ['Terrace Dinner', 'Edison Bulbs', 'Red Rose Heart']
    },
    '20230711_210754.jpg': {
        'title': 'Candlelit Night Gazebo Romantic Feast',
        'amharicTitle': 'የምሽት የፍቅር እራት በጋዜቦ ውስጥ',
        'category': 'proposals',
        'categoryLabel': 'Proposals & Romantic',
        'description': 'Atmospheric night shot of the illuminated proposal pavilion with warm string lights, glowing candelabras, and rose-petal floor.',
        'featured': False,
        'tags': ['Night Atmosphere', 'Warm Glow', 'Bespoke Styling']
    },
    'photo_29_2026-11-12_11-43-49.jpg': {
        'title': 'Traditional "ቀለበት" Ring Ceremony Double Arch Stage',
        'amharicTitle': 'የቀለበት ስነ-ስርዓት ድርብ የአበባ ቅስት መድረክ',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Custom neon "ቀለበት" ring emblem framed by double lush floral archways, emerald & ivory drapery, and a royal tufted couch.',
        'featured': True,
        'tags': ['ቀለበት', 'Ring Ceremony', 'Emerald Draping', 'Double Arch']
    },
    'photo_12_2026-11-12_11-43-49.jpg': {
        'title': 'Noble "ሽምግልና" Emerald Elder Throne Setup',
        'amharicTitle': 'የሽምግልና ክብር መድረክ በአረንጓዴ ጨርቅ',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Traditional Ethiopian Shimgilna ceremony backdrop with golden slatted chair, neon "ሽምግልና" signage, and crisp emerald velvet swags.',
        'featured': True,
        'tags': ['ሽምግልና', 'Shimgilna', 'Elder Throne', 'Cultural Engagement']
    },
    'photo_13_2026-11-12_11-43-49.jpg': {
        'title': 'Outdoor Gold Gazebo Shimgilna Throne',
        'amharicTitle': 'የውጭ ግቢ የሽምግልና የክብር ዙፋን',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Outdoor garden pavilion for traditional engagement with golden tufted throne, champagne drapery, and lush flower columns.',
        'featured': False,
        'tags': ['ሽምግልና', 'Tufted Throne', 'Outdoor Pavilion']
    },
    'photo_14_2026-11-12_11-43-49.jpg': {
        'title': 'Shimgilna Fairy Light Emerald & Ruby Stage',
        'amharicTitle': 'የሽምግልና መድረክ በብርሃን እና በአበባ አምዶች',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Indoor Shimgilna celebration featuring deep olive velvet couch, illuminated backdrop with warm backlighting, and grand flower pillars.',
        'featured': False,
        'tags': ['ሽምግልና', 'Velvet Couch', 'Floral Pillars']
    },
    'photo_22_2026-11-12_11-43-49.jpg': {
        'title': 'Traditional Shimgilna with Cultural Mesob & Rose Mound',
        'amharicTitle': 'የባህል መሶብ እና የጽጌረዳ ክምር የሽምግልና ዲዛይን',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Authentic Ethiopian cultural touch integrating woven colorful mesob plates, neon "ሽምግልና", multi-tier candelabras, and massive fresh rose mound.',
        'featured': True,
        'tags': ['ሽምግልና', 'Mesob Heritage', 'Candelabras', 'Ethiopian Tradition']
    },
    'photo_23_2026-11-12_11-43-49.jpg': {
        'title': 'Regal White Shimgilna Temple Arch',
        'amharicTitle': 'ነጭ የክብር የሽምግልና ቅስት መድረክ',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Monochrome pure white pavilion arch with blooming white wisteria, gold accent chair, and sculptured illuminated floral lamps.',
        'featured': False,
        'tags': ['ሽምግልና', 'White Arch', 'Illuminated Lamps']
    },
    'photo_24_2026-11-12_11-43-49.jpg': {
        'title': 'Enchanted Forest Shimgilna Peacock Throne',
        'amharicTitle': 'የወርቅ ፒኮክ ወንበር እና የበረዶ አበባ ቅስት',
        'category': 'engagements',
        'categoryLabel': 'Traditional Engagements',
        'description': 'Full-frame white wisteria archway enclosing an ornate filigree gold peacock chair and warm neon "ሽምግልና" sign.',
        'featured': True,
        'tags': ['ሽምግልና', 'Peacock Chair', 'Full Floral Arch']
    },
    'FB_IMG_1748633981635.jpg': {
        'title': '"Romel\'s Christening" Grand Marquee Reception',
        'amharicTitle': 'የሮሜል ክርስትና ታላቁ የድንኳን ድግስ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Full marquee pavilion reception celebrating Romel\'s Christening: customized entrance signage, crystal chandeliers, round banquet tables, and fresh lawn.',
        'featured': True,
        'tags': ['ክርስትና', 'Christening', 'Marquee Reception', 'Round Tables']
    },
    'FB_IMG_1748634002262.jpg': {
        'title': 'Christening Altar with Giant Sculpted Blossom & Cross',
        'amharicTitle': 'የክርስትና መድረክ ከመስቀል እና ትልቅ አበባ ጋር',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Pristine white christening stage with sculptured 3D giant bloom, neon cross emblem, lush greenery wall, and geometric gold stand.',
        'featured': True,
        'tags': ['ክርስትና', 'Neon Cross', '3D Flower', 'Altar Stage']
    },
    'photo_10_2026-11-12_11-43-49.jpg': {
        'title': 'Fuchsia & Cream Tent "ክርስትና" Stage',
        'amharicTitle': 'የክርስትና መድረክ በፉክሺያ አበባ እና ቻንደሊየር',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Christening celebration stage with glowing neon cross, cream ruched drapery, fuchsia floral bouquets, and crystal chandelier.',
        'featured': False,
        'tags': ['ክርስትና', 'Tent Stage', 'Neon Cross', 'Chandeliers']
    },
    'photo_11_2026-11-12_11-43-49.jpg': {
        'title': 'Blush Pink Silks & Neon Cross Christening Stage',
        'amharicTitle': 'የሮዝ ሐር ጨርቅ የክርስትና መድረክ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Delicate blush pink draped fabric backdrop with central neon cross, Amharic neon "ክርስትና", and floral crown garlands.',
        'featured': False,
        'tags': ['ክርስትና', 'Blush Pink', 'Cross Neon']
    },
    'photo_25_2026-11-12_11-43-49.jpg': {
        'title': 'Burgundy & Royal Blue Christening Stage',
        'amharicTitle': 'የበርገንዲ እና ሰማያዊ ብርሃን የክርስትና መድረክ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Rich burgundy drapery framing high-back tufted thrones, neon cross, glowing "ክርስትና", and ambient blue lighting.',
        'featured': False,
        'tags': ['ክርስትና', 'Burgundy Draping', 'Tufted Throne']
    },
    'photo_28_2026-11-12_11-43-49.jpg': {
        'title': 'Olive Green Velvet & Cross Christening Altar',
        'amharicTitle': 'የወይራ አረንጓዴ ቬልቬት የክርስትና መድረክ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Olive green velvet swags, neon cross, Amharic "ክርስትና" sign, gold slatted divider, and lush floral corner installation.',
        'featured': False,
        'tags': ['ክርስትና', 'Olive Velvet', 'Neon Cross']
    },
    'photo_1_2026-11-12_11-43-49.jpg': {
        'title': 'Illuminated Neon Cross & Sapphire Christening Altar',
        'amharicTitle': 'የሰማያዊ ብርሃን እና የመስቀል የክርስትና መድረክ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Deep sapphire ambient backlighting highlighting an illuminated neon cross, Amharic "ክርስትና" insignia, and fuchsia floral swags.',
        'featured': False,
        'tags': ['ክርስትና', 'Cross Neon', 'Sapphire Ambient', 'Altar']
    },
    'FB_IMG_1748633989427.jpg': {
        'title': 'Grand Christening Pavilion Central Aisle',
        'amharicTitle': 'የክርስትና ድንኳን አዳራሽ የመሃል መተላለፊያ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Central aisle perspective through the white marquee tent leading directly toward the illuminated floral cross altar.',
        'featured': False,
        'tags': ['ክርስትና', 'Central Aisle', 'Marquee Tent']
    },
    'photo_40_2026-11-12_11-43-09.jpg': {
        'title': 'Butterfly Garden Marquee with Official Edbel Hallmark',
        'amharicTitle': 'የቢራቢሮ ጭብጥ ድንኳን ከኤድቤል ማህተም ጋር',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Branded view of the luxury garden marquee dining hall featuring clear ghost seating and pastel florals.',
        'featured': False,
        'tags': ['Edbel Hallmark', 'Marquee Dining', 'Ghost Chairs']
    },
    'photo_36_2026-11-12_11-43-49.jpg': {
        'title': 'Lawn Pavilion Christening Reception Entrance',
        'amharicTitle': 'የሳር ግቢ የክርስትና አቀባበል መግቢያ',
        'category': 'christenings',
        'categoryLabel': 'Christenings & Baptisms',
        'description': 'Entrance perspective of Romel’s Christening marquee on lush artificial turf with crystal chandelier canopies.',
        'featured': False,
        'tags': ['ክርስትና', 'Entrance Display', 'Marquee Lawn']
    },
    'photo_26_2026-11-12_11-43-49.jpg': {
        'title': 'Lavender & Chrome Silver Birthday Arch',
        'amharicTitle': 'የላቬንደር እና ሲልቨር ፊኛ የልደት ድምቀት',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Chic outdoor villa birthday installation featuring metallic chrome silver and lavender balloon garland, arched backdrop, and draped pedestals.',
        'featured': True,
        'tags': ['Balloon Arch', 'Lavender', 'Chrome Silver', 'Happy Birthday']
    },
    'photo_27_2026-11-12_11-43-49.jpg': {
        'title': 'Luxury Villa Porch Birthday Celebration',
        'amharicTitle': 'የቪላ በረንዳ የልደት ዝግጅት',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Wide perspective of the luxury residence birthday setup on polished marble stairs with illuminated neon and balloon artistry.',
        'featured': False,
        'tags': ['Villa Celebration', 'Outdoor Porch', 'Marble Steps']
    },
    'photo_31_2026-11-12_11-43-49.jpg': {
        'title': 'Chic Black & Gold "Bibi & Nakato" Milestone Birthday',
        'amharicTitle': 'የጥቁር እና የወርቅ ፊኛ የልደት ዝግጅት',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Sophisticated modern party decor with matte black arch, chrome gold and onyx balloon garland, custom lettering, and white fur rug.',
        'featured': True,
        'tags': ['Black & Gold', 'Milestone Birthday', 'Chic Party', 'Balloon Garland']
    },
    'photo_30_2026-11-12_11-43-49.jpg': {
        'title': '"Christabel\'s Birthday" Hello Kitty Garden Party',
        'amharicTitle': 'የክርስታቤል የልደት ድግስ በሄሎ ኪቲ ጭብጥ',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Whimsical garden birthday celebration for kids featuring Hello Kitty custom welcome board, pastel lilac and peach balloon arches, and gold plinths.',
        'featured': True,
        'tags': ['Kids Birthday', 'Hello Kitty', 'Pastel Balloons', 'Garden Party']
    },
    'photo_32_2026-11-12_11-43-49.jpg': {
        'title': '"Michael\'s Honey" 1st Birthday Bumblebee Theme',
        'amharicTitle': 'የሚካኤል 1ኛ አመት የንብ ጭብጥ የልደት ዝግጅት',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Adorable 1st birthday theme with honeycomb arches, yellow, white and gold balloon clusters, bumblebee accents, and custom #1 pedestal.',
        'featured': True,
        'tags': ['1st Birthday', 'Bumblebee Theme', 'Honeycomb', 'Balloon Art']
    },
    '20230727_191227.jpg': {
        'title': 'Rose Gold & Blush Dessert & Fruit Showcase',
        'amharicTitle': 'የሮዝ ጎልድ እና የፍራፍሬ ማዕድ ዝግጅት',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Elegant indoor party reception with crystal goblets, fresh floral vases, fresh fruit arrangements, and rose-gold balloon garlands.',
        'featured': False,
        'tags': ['Dessert Table', 'Fruit Table', 'Crystal Goblets', 'Rose Gold']
    },
    'FB_IMG_1718558780004.jpg': {
        'title': '"Eleona Turns 1" Pastel Rainbow Butterfly Party',
        'amharicTitle': 'የኤሊዮና 1ኛ አመት የፓስቴል ቀስተ ደመና ልደት',
        'category': 'birthdays',
        'categoryLabel': 'Birthdays & Parties',
        'description': 'Vibrant yet gentle pastel balloon cloud (mint, lilac, butter yellow, blush) with golden butterfly details and fluted display plinths.',
        'featured': False,
        'tags': ['Eleona 1st Birthday', 'Rainbow Pastel', 'Butterflies', 'Cylinder Plinths']
    },
    'photo_6_2026-11-12_11-43-49.jpg': {
        'title': 'Royal Purple & Shimmer Gold Gala Banquet',
        'amharicTitle': 'የክብር ግብዣ እና የጋላ እራት አዳራሽ ዝግጅት',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Magnificent long VIP dining table with royal purple linens, gold sequin runner, shimmering gold sequin arches, chandelier, and gold Chiavari seating.',
        'featured': True,
        'tags': ['Gala Dinner', 'Corporate Banquet', 'Gold Sequin', 'Chiavari Chairs']
    },
    'photo_16_2026-11-12_11-43-49.jpg': {
        'title': '"Congratulations" Graduation & Milestone Stage',
        'amharicTitle': 'የምረቃ እና የስኬት ክብር መድረክ ዝግጅት',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Distinguished graduation celebration pavilion with custom mortarboard neon sign, ivory scalloped draping, floral pillars, and high gold throne.',
        'featured': True,
        'tags': ['Graduation', 'Congratulations', 'Mortarboard Neon', 'Milestone']
    },
    'photo_17_2026-11-12_11-43-49.jpg': {
        'title': 'Champagne Gold Milestone Celebration Stage',
        'amharicTitle': 'የሻምፓኝ ወርቅ የስኬት መድረክ ከሶፋ ጋር',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Luxurious champagne gold draped backdrop with glowing "Congratulations" sign, curved velvet fluted sofa, and floral cascades.',
        'featured': False,
        'tags': ['Congratulations', 'Champagne Gold', 'Fluted Velvet Sofa']
    },
    'FB_IMG_1725365533117.jpg': {
        'title': 'Luxury White Marquee Tent with Ghost Chairs',
        'amharicTitle': 'የቅንጦት ነጭ የድንኳን አዳራሽ በዘመናዊ ወንበሮች',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Bespoke outdoor marquee pavilion featuring lush green turf, clear ghost chairs, hanging crystal chandeliers, and pink floral centerpieces.',
        'featured': True,
        'tags': ['Ghost Chairs', 'Marquee Tent', 'Outdoor Pavilion', 'Chandeliers']
    },
    'photo_37_2026-11-12_11-43-49.jpg': {
        'title': 'Emerald Pavilion with Modern Curved Arch Staging',
        'amharicTitle': 'የኤመራልድ አረንጓዴ የድንኳን አዳራሽ እና ቅስቶች',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'High-concept tent design with sweeping emerald green drapery, modern architectural white arch colonnade, and crystal chandeliers.',
        'featured': True,
        'tags': ['Emerald Green', 'Architectural Arches', 'Modern Tent']
    },
    'photo_21_2026-11-12_11-43-49.jpg': {
        'title': '"Bride to Be" Luxury Bridal Shower Pavilion',
        'amharicTitle': 'የሙሽሪት ሽኝት (Bride to Be) ድንኳን ዝግጅት',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Charming bridal shower setup under marquee with lush blush flower wall arch, gold throne, and dressed banquet tables.',
        'featured': False,
        'tags': ['Bride to Be', 'Bridal Shower', 'Flower Wall', 'Marquee']
    },
    'FB_IMG_1726116455287.jpg': {
        'title': 'Handcrafted Coral Rose Bridal Bouquet Dome',
        'amharicTitle': 'የተመረጠ የሙሽሪት እቅፍ አበባ ጥበብ',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Artisanal sphere arrangement of fresh coral-orange roses accented with delicate baby\'s breath, handcrafted for weddings and milestones.',
        'featured': False,
        'tags': ['Bridal Bouquet', 'Floral Art', 'Fresh Roses']
    },
    '3caaccaddf5c1546a50857e6326a987c_8.jpeg': {
        'title': 'VIP Moët & Chandon Celebration Gift Box',
        'amharicTitle': 'የክብር ሻምፓኝ እና የጽጌረዳ የስጦታ ሳጥን',
        'category': 'corporate_milestones',
        'categoryLabel': 'Corporate & Milestones',
        'description': 'Bespoke event gift styling: Moët & Chandon Imperial Champagne nestled in crystal-embellished red roses and Ferrero Rocher chocolates.',
        'featured': False,
        'tags': ['VIP Gift', 'Moët Champagne', 'Luxury Styling', 'Red Roses']
    }
}

# Process images
events_list = []
id_counter = 1

for filename, meta in CATALOG.items():
    if not os.path.exists(filename):
        print(f"File not found: {filename}")
        continue
    
    clean_name = f"event_{id_counter:02d}_{meta['category']}.jpg"
    dest_path = os.path.join('public/assets/images/events', clean_name)
    thumb_name = f"thumb_{id_counter:02d}_{meta['category']}.jpg"
    thumb_path = os.path.join('public/assets/images/events', thumb_name)
    
    im = Image.open(filename).convert('RGB')
    
    # Check if crop is needed
    if filename in SCREENSHOT_CROPS:
        box = SCREENSHOT_CROPS[filename]
        # ensure box is within bounds
        box = (max(0, box[0]), max(0, box[1]), min(im.width, box[2]), min(im.height, box[3]))
        im = im.crop(box)
    
    w, h = im.size
    ratio = w / h
    orientation = 'landscape' if ratio > 1.15 else ('portrait' if ratio < 0.88 else 'square')
    
    # Save optimized web version (max 1920 width or height)
    max_dim = 1920
    if max(w, h) > max_dim:
        scale = max_dim / max(w, h)
        im_resized = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    else:
        im_resized = im
        
    im_resized.save(dest_path, 'JPEG', quality=88, optimize=True)
    
    # Save thumbnail (max 600 width or height)
    thumb_dim = 600
    scale_thumb = thumb_dim / max(w, h)
    im_thumb = im.resize((int(w * scale_thumb), int(h * scale_thumb)), Image.Resampling.LANCZOS)
    im_thumb.save(thumb_path, 'JPEG', quality=82, optimize=True)
    
    event_entry = {
        'id': f"edbel-evt-{id_counter}",
        'title': meta['title'],
        'amharicTitle': meta['amharicTitle'],
        'category': meta['category'],
        'categoryLabel': meta['categoryLabel'],
        'description': meta['description'],
        'image': f"/assets/images/events/{clean_name}",
        'thumb': f"/assets/images/events/{thumb_name}",
        'originalFile': filename,
        'orientation': orientation,
        'featured': meta.get('featured', False),
        'tags': meta['tags'],
        'width': im_resized.width,
        'height': im_resized.height,
    }
    events_list.append(event_entry)
    id_counter += 1

# Copy logos to branding
for logo_f in ['edbel-logo-mark.png', 'edbel-logo-transparent.png']:
    if os.path.exists(logo_f):
        Image.open(logo_f).save(os.path.join('public/assets/images/branding', logo_f))

# Write JSON
with open('src/data/eventsData.json', 'w', encoding='utf-8') as f:
    json.dump(events_list, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(events_list)} events into public/assets/images/events and src/data/eventsData.json!")
