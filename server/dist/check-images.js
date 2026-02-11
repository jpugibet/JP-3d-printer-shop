"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageUrls = [
    'https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599354607478-75701d9c0245?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533234427049-7e932367c37e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595279611688-6d2c4b8b6a38?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615852573215-6807908c62c3?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1685641756598-a28d54109728?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618483120677-22d73356e4c7?q=80&w=1000&auto=format&fit=crop',
    'https://images.pexels.com/photos/19149826/pexels-photo-19149826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581093196901-c5a403013896?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596496181963-9d22081f9a2e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617300799443-4e837f480371?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598555230912-9c98bd5d933a?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1629837777174-8846313bce7c?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595079676714-985698b6ad8e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1658231924671-554483756d81?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558230588-466085a819b1?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582234380962-e61e6878e1b3?q=80&w=1000&auto=format&fit=crop',
];
async function checkUrls() {
    console.log(`Checking ${imageUrls.length} URLs...`);
    for (const [index, url] of imageUrls.entries()) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
                console.log(`[${index + 1}/${imageUrls.length}] OK: ${url}`);
            }
            else {
                console.error(`[${index + 1}/${imageUrls.length}] FAILED (${response.status}): ${url}`);
            }
        }
        catch (error) {
            console.error(`[${index + 1}/${imageUrls.length}] ERROR: ${url}`, error);
        }
    }
}
checkUrls();
//# sourceMappingURL=check-images.js.map