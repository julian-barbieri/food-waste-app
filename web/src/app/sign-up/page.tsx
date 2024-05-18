import { BrandsService, UsersService } from "@/client";

export default async function Home() {
  const brands = await BrandsService.brandControllerFindAll();
  const users = await UsersService.userControllerFindAll();
  return (
    <div>
      <div>sign up</div>

      <div>
        {brands.map((brand) => (
          <div key={brand.id}>
            {brand.name} - {brand.description} - {brand.logoUrl}
          </div>
        ))}
      </div>

      <div>{JSON.stringify(users)}</div>
    </div>
  );
}
