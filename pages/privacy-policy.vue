<template>
  <UContainer class="mt-8 mb-8">
    <UCard>
      <template #header>
        <h1 class="text-2xl font-semibold">
          Política de Privacidad (Sitio de Pruebas)
        </h1>
      </template>

      <div class="space-y-6 text-gray-700 dark:text-gray-300">
        <p><strong>Fecha de entrada en vigor: [Fecha Actual]</strong></p>

        <p>
          Esta Política de Privacidad describe cómo MurruDev ("nosotros",
          "nuestro" o "nuestra") recopila, utiliza y divulga su información
          personal como parte de la configuración de nuestra aplicación de Meta
          for Developers para pruebas de integración.
        </p>

        <h2 class="text-xl font-medium pt-4">1. Información que recopilamos</h2>
        <p>
          Recopilamos información limitada necesaria para las pruebas de la API
          de mensajería de Instagram y Facebook, que puede incluir:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>
            Nombres de usuario y IDs de cuentas de prueba de Facebook/Instagram.
          </li>
          <li>
            Contenido de mensajes de prueba generados por usuarios de prueba.
          </li>
        </ul>

        <h2 class="text-xl font-medium pt-4">2. Uso de la información</h2>
        <p>Utilizamos la información recopilada exclusivamente para:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>
            Probar y depurar la integración de la API de mensajería entre
            nuestra aplicación de Meta y las cuentas de Instagram/Facebook.
          </li>
          <li>Demostraciones internas de la funcionalidad del software.</li>
        </ul>

        <h2 class="text-xl font-medium pt-4">
          3. Divulgación de la información
        </h2>
        <p>
          No vendemos, comercializamos ni transferimos su información de prueba
          a terceros externos. Los datos se almacenan temporalmente durante el
          ciclo de pruebas.
        </p>

        <h2 class="text-xl font-medium pt-4">4. Seguridad de los datos</h2>
        <p>
          Implementamos medidas de seguridad razonables para proteger los datos
          de prueba. Sin embargo, recuerda que ningún sistema es 100% seguro.
        </p>

        <h2 class="text-xl font-medium pt-4">5. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política de prueba ocasionalmente.
          Publicaremos cualquier cambio en esta página.
        </p>

        <h2 class="text-xl font-medium pt-4">6. Contacto</h2>
        <p>
          Si tiene preguntas sobre esta política de privacidad de prueba,
          contáctenos en <UAvatar icon="i-heroicons-envelope" size="xs" /><a
            href="mailto:ernestomurrudev@gmail.com"
            class="text-blue-500 hover:underline"
          >
            ernestomurrudev@gmail.com</a
          >.
        </p>
      </div>
    </UCard>
  </UContainer>
</template>
