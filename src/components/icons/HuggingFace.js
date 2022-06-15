import * as React from 'react'

function SvgHuggingFace({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 272 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M32.24 39.324c9.297 0 16.834-7.576 16.834-16.921 0-9.345-7.537-16.92-16.835-16.92-9.297 0-16.835 7.575-16.835 16.92 0 9.345 7.538 16.92 16.835 16.92z"
        fill="#fff"
      />
      <path
        d="M49.074 22.403c0-9.345-7.537-16.92-16.834-16.92-9.298 0-16.835 7.575-16.835 16.92 0 9.345 7.537 16.921 16.834 16.921 9.298 0 16.835-7.576 16.835-16.92zm-35.607 0c0-10.42 8.405-18.868 18.773-18.868 10.367 0 18.772 8.448 18.772 18.868 0 10.421-8.405 18.869-18.773 18.869-10.367 0-18.772-8.448-18.772-18.869z"
        fill="#14002D"
      />
      <path
        d="M37.709 17.798c.617.22.863 1.495 1.487 1.162a2.44 2.44 0 001.001-3.293 2.416 2.416 0 00-3.276-1.006 2.44 2.44 0 00-1.001 3.292c.296.56 1.237-.35 1.789-.155zM26.297 17.798c-.618.22-.863 1.495-1.487 1.162a2.44 2.44 0 01-1.002-3.293 2.416 2.416 0 013.276-1.006 2.44 2.44 0 011.002 3.292c-.296.56-1.237-.35-1.79-.155z"
        fill="#14002D"
      />
      <path
        d="M32.118 29.482c4.762 0 6.298-4.267 6.298-6.458 0-1.138-.761-.78-1.981-.173-1.128.561-2.646 1.334-4.317 1.334-3.478 0-6.298-3.352-6.298-1.16 0 2.19 1.537 6.457 6.298 6.457z"
        fill="#3A3B45"
      />
      <path
        d="M17.856 25.447c-.784 0-1.485.324-1.974.911-.302.364-.618.95-.644 1.828a3.426 3.426 0 00-.94-.148c-.751 0-1.43.29-1.91.815-.615.674-.89 1.503-.77 2.332.057.395.188.749.384 1.077a2.586 2.586 0 00-.866 1.368 2.872 2.872 0 00.384 2.309 2.553 2.553 0 00-.178 2.445c.497 1.129 1.73 2.019 4.127 2.974 1.49.594 2.854.973 2.867.977 1.97.513 3.753.774 5.296.774 2.835 0 4.866-.873 6.034-2.594 1.881-2.773 1.612-5.309-.821-7.753-1.347-1.353-2.242-3.347-2.429-3.785-.376-1.296-1.37-2.737-3.022-2.737-.14 0-.28.011-.419.033-.724.114-1.356.533-1.808 1.163-.488-.61-.962-1.094-1.39-1.368-.647-.412-1.293-.62-1.92-.62zm0 1.948c.247 0 .55.106.882.318 1.033.659 3.027 4.104 3.758 5.444.244.449.662.639 1.039.639.747 0 1.33-.747.068-1.695-1.898-1.428-1.232-3.76-.326-3.904a.747.747 0 01.117-.01c.823 0 1.187 1.427 1.187 1.427s1.064 2.688 2.894 4.525c1.829 1.838 1.923 3.313.59 5.278-.91 1.34-2.65 1.745-4.434 1.745-1.85 0-3.746-.436-4.81-.713-.052-.013-6.516-1.849-5.697-3.41.138-.263.364-.368.65-.368 1.153 0 3.25 1.724 4.152 1.724.201 0 .343-.086.401-.296.384-1.385-5.84-1.968-5.316-3.974.092-.355.343-.5.696-.499 1.524 0 4.942 2.693 5.658 2.693.055 0 .094-.016.116-.05.359-.582.162-.989-2.368-2.528-2.53-1.54-4.307-2.466-3.296-3.571.116-.128.28-.184.48-.184 1.537 0 5.166 3.32 5.166 3.32s.98 1.024 1.572 1.024a.36.36 0 00.33-.187c.42-.712-3.9-4.004-4.144-5.362-.166-.92.116-1.386.635-1.386z"
        fill="#14002D"
      />
      <path
        d="M28.065 39.417c1.333-1.965 1.24-3.44-.59-5.278-1.83-1.837-2.894-4.525-2.894-4.525s-.398-1.561-1.304-1.418c-.906.144-1.571 2.477.326 3.904 1.898 1.427-.377 2.396-1.108 1.056-.73-1.34-2.723-4.785-3.757-5.444-1.033-.658-1.76-.29-1.517 1.069.244 1.358 4.565 4.65 4.145 5.362-.42.712-1.903-.837-1.903-.837s-4.637-4.242-5.647-3.136c-1.01 1.105.766 2.031 3.297 3.57 2.53 1.54 2.727 1.946 2.368 2.529-.36.582-5.946-4.151-6.47-2.145-.524 2.007 5.7 2.59 5.316 3.975-.384 1.385-4.385-2.622-5.203-1.06-.819 1.561 5.646 3.396 5.698 3.41 2.088.544 7.39 1.698 9.243-1.032z"
        fill="#fff"
      />
      <path
        d="M46.864 25.447c.785 0 1.486.324 1.974.911.303.364.618.95.644 1.828.33-.095.645-.148.94-.148.752 0 1.43.29 1.91.815.616.674.89 1.503.77 2.332a2.857 2.857 0 01-.384 1.077c.414.336.719.805.866 1.368a2.872 2.872 0 01-.384 2.309 2.552 2.552 0 01.178 2.445c-.496 1.129-1.73 2.019-4.127 2.974-1.49.594-2.854.973-2.866.977-1.97.513-3.753.774-5.296.774-2.836 0-4.866-.873-6.035-2.594-1.88-2.773-1.612-5.309.822-7.753 1.346-1.353 2.242-3.347 2.428-3.785.376-1.296 1.37-2.737 3.023-2.737.14 0 .28.011.418.033.724.114 1.357.533 1.809 1.163.488-.61.962-1.094 1.39-1.368.646-.412 1.292-.62 1.92-.62zm0 1.948c-.247 0-.549.106-.882.318-1.033.659-3.027 4.104-3.757 5.444a1.178 1.178 0 01-1.04.639c-.746 0-1.33-.747-.068-1.695 1.898-1.428 1.233-3.76.327-3.904a.748.748 0 00-.117-.01c-.824 0-1.187 1.427-1.187 1.427s-1.065 2.688-2.894 4.525c-1.83 1.838-1.924 3.313-.59 5.278.909 1.34 2.65 1.745 4.433 1.745 1.85 0 3.747-.436 4.81-.713.052-.013 6.516-1.849 5.697-3.41-.137-.263-.364-.368-.65-.368-1.152 0-3.25 1.724-4.151 1.724-.202 0-.344-.086-.402-.296-.384-1.385 5.841-1.968 5.317-3.974-.093-.355-.344-.5-.697-.499-1.523 0-4.941 2.693-5.658 2.693-.055 0-.094-.016-.115-.05-.36-.582-.163-.989 2.368-2.528 2.53-1.54 4.306-2.466 3.296-3.571-.116-.128-.281-.184-.481-.184-1.536 0-5.166 3.32-5.166 3.32s-.98 1.024-1.572 1.024a.36.36 0 01-.33-.187c-.42-.712 3.901-4.004 4.145-5.362.165-.92-.116-1.386-.636-1.386z"
        fill="#14002D"
      />
      <path
        d="M36.656 39.417c-1.334-1.965-1.24-3.44.59-5.278 1.83-1.837 2.894-4.525 2.894-4.525s.398-1.561 1.304-1.418c.906.144 1.571 2.477-.327 3.904-1.897 1.427.378 2.396 1.108 1.056.73-1.34 2.724-4.785 3.758-5.444 1.033-.658 1.76-.29 1.517 1.069-.243 1.358-4.565 4.65-4.145 5.362.42.712 1.903-.837 1.903-.837s4.637-4.242 5.646-3.136c1.01 1.105-.766 2.031-3.296 3.57-2.53 1.54-2.727 1.946-2.368 2.529.36.582 5.945-4.151 6.47-2.145.524 2.007-5.7 2.59-5.316 3.975.384 1.385 4.384-2.622 5.203-1.06.818 1.561-5.646 3.396-5.698 3.41-2.088.544-7.39 1.698-9.243-1.032z"
        fill="#fff"
      />
      <path
        d="M32.118 29.482c4.762 0 6.298-4.267 6.298-6.458 0-1.138-.761-.78-1.981-.173-1.128.561-2.646 1.334-4.317 1.334-3.478 0-6.298-3.352-6.298-1.16 0 2.19 1.537 6.457 6.298 6.457z"
        fill="#14002D"
      />
      <path
        d="M70.969 34.953V13.218h4.9v8.367h7.5v-8.367h4.934v21.735h-4.934v-9.068h-7.5v9.067h-4.9zM97.997 35.352c-1.8 0-3.11-.588-3.933-1.766-.8-1.2-1.2-2.834-1.2-4.9V18.419h4.9v9.633c0 1.178.167 2 .5 2.467.333.444.856.667 1.567.667.622 0 1.144-.145 1.567-.434.422-.289.877-.755 1.366-1.4V18.42h4.9v16.534h-4l-.366-2.3h-.1c-.689.822-1.445 1.477-2.267 1.966-.822.489-1.8.733-2.934.733zM117.877 41.986c-1.289 0-2.456-.144-3.5-.433-1.045-.29-1.878-.745-2.5-1.367-.623-.622-.934-1.422-.934-2.4 0-1.334.789-2.445 2.367-3.334v-.133a4.315 4.315 0 01-1.1-1.1c-.289-.444-.433-1.011-.433-1.7 0-.6.177-1.178.533-1.733.355-.556.8-1.012 1.333-1.367v-.133c-.578-.4-1.1-.978-1.566-1.734-.445-.755-.667-1.611-.667-2.567 0-1.333.322-2.433.967-3.3a5.93 5.93 0 012.533-2 8.422 8.422 0 013.333-.666c.978 0 1.834.133 2.567.4h6.034v3.566h-2.634c.156.245.278.556.367.934.111.378.167.789.167 1.233 0 1.267-.289 2.311-.867 3.133-.578.823-1.356 1.434-2.333 1.834-.978.4-2.078.6-3.301.6a6.505 6.505 0 01-2-.333c-.4.333-.6.744-.6 1.233 0 .422.189.733.567.933.378.2 1.022.3 1.933.3h2.667c2.045 0 3.6.334 4.667 1 1.089.645 1.633 1.712 1.633 3.2 0 1.134-.377 2.145-1.133 3.034-.755.911-1.822 1.622-3.2 2.133-1.378.511-3.011.767-4.9.767zm.366-15.234c.645 0 1.178-.233 1.601-.7.444-.466.666-1.155.666-2.067 0-.866-.222-1.522-.666-1.966-.423-.467-.956-.7-1.601-.7-.644 0-1.188.222-1.633.666-.422.445-.633 1.111-.633 2 0 .912.211 1.6.633 2.067.445.467.989.7 1.633.7zm.4 12.167c1.112 0 2.023-.2 2.734-.6.711-.4 1.067-.878 1.067-1.433 0-.511-.223-.856-.667-1.034-.422-.177-1.045-.266-1.867-.266h-1.7c-.555 0-1.022-.022-1.4-.067a5.224 5.224 0 01-.933-.133c-.6.533-.9 1.078-.9 1.633 0 .623.333 1.09 1 1.4.689.334 1.578.5 2.666.5zM135.683 41.986c-1.288 0-2.455-.144-3.5-.433-1.044-.29-1.878-.745-2.5-1.367-.622-.622-.933-1.422-.933-2.4 0-1.334.789-2.445 2.367-3.334v-.133a4.3 4.3 0 01-1.1-1.1c-.289-.444-.434-1.011-.434-1.7 0-.6.178-1.178.534-1.733.355-.556.8-1.012 1.333-1.367v-.133c-.578-.4-1.1-.978-1.567-1.734-.444-.755-.666-1.611-.666-2.567 0-1.333.322-2.433.966-3.3a5.933 5.933 0 012.534-2 8.419 8.419 0 013.333-.666c.978 0 1.834.133 2.567.4h6.033v3.566h-2.633c.156.245.278.556.367.934.111.378.166.789.166 1.233 0 1.267-.289 2.311-.866 3.133-.578.823-1.356 1.434-2.334 1.834-.978.4-2.078.6-3.3.6a6.505 6.505 0 01-2-.333c-.4.333-.6.744-.6 1.233 0 .422.189.733.567.933.378.2 1.022.3 1.933.3h2.667c2.044 0 3.6.334 4.667 1 1.089.645 1.633 1.712 1.633 3.2 0 1.134-.378 2.145-1.133 3.034-.756.911-1.823 1.622-3.2 2.133-1.378.511-3.012.767-4.901.767zm.367-15.234c.645 0 1.178-.233 1.6-.7.445-.466.667-1.155.667-2.067 0-.866-.222-1.522-.667-1.966-.422-.467-.955-.7-1.6-.7a2.22 2.22 0 00-1.633.666c-.423.445-.634 1.111-.634 2 0 .912.211 1.6.634 2.067.444.467.989.7 1.633.7zm.4 12.167c1.111 0 2.022-.2 2.734-.6.711-.4 1.066-.878 1.066-1.433 0-.511-.222-.856-.666-1.034-.423-.177-1.045-.266-1.867-.266h-1.7a12.3 12.3 0 01-1.4-.067 5.237 5.237 0 01-.934-.133c-.6.533-.9 1.078-.9 1.633 0 .623.334 1.09 1 1.4.689.334 1.578.5 2.667.5zM147.59 34.953V18.418h4.9v16.535h-4.9zm2.433-18.968c-.822 0-1.489-.233-2-.7-.511-.467-.766-1.089-.766-1.867 0-.777.255-1.4.766-1.866.511-.467 1.178-.7 2-.7.823 0 1.489.233 2 .7.512.466.767 1.088.767 1.866s-.255 1.4-.767 1.867c-.511.467-1.177.7-2 .7zM156.802 34.953V18.418h4.001l.333 2.1h.133a12.697 12.697 0 012.334-1.733c.866-.51 1.855-.767 2.967-.767 1.8 0 3.1.6 3.9 1.8.822 1.178 1.233 2.8 1.233 4.867v10.268h-4.9v-9.634c0-1.2-.167-2.022-.5-2.467-.311-.444-.822-.667-1.534-.667-.622 0-1.155.145-1.6.434-.444.266-.933.655-1.466 1.166v11.168h-4.901zM181.779 41.986c-1.289 0-2.456-.144-3.5-.433-1.045-.29-1.878-.745-2.5-1.367-.623-.622-.934-1.422-.934-2.4 0-1.334.789-2.445 2.367-3.334v-.133a4.315 4.315 0 01-1.1-1.1c-.289-.444-.433-1.011-.433-1.7 0-.6.178-1.178.533-1.733a4.61 4.61 0 011.333-1.367v-.133c-.577-.4-1.1-.978-1.566-1.734-.445-.755-.667-1.611-.667-2.567 0-1.333.322-2.433.967-3.3a5.93 5.93 0 012.533-2 8.427 8.427 0 013.334-.666c.977 0 1.833.133 2.566.4h6.034v3.566h-2.633c.155.245.277.556.366.934.111.378.167.789.167 1.233 0 1.267-.289 2.311-.867 3.133-.578.823-1.355 1.434-2.333 1.834-.978.4-2.078.6-3.3.6a6.495 6.495 0 01-2-.333c-.4.333-.6.744-.6 1.233 0 .422.188.733.566.933.378.2 1.022.3 1.934.3h2.666c2.045 0 3.601.334 4.667 1 1.089.645 1.634 1.712 1.634 3.2 0 1.134-.378 2.145-1.134 3.034-.755.911-1.822 1.622-3.2 2.133-1.378.511-3.011.767-4.9.767zm.367-15.234c.644 0 1.177-.233 1.6-.7.444-.466.666-1.155.666-2.067 0-.866-.222-1.522-.666-1.966-.423-.467-.956-.7-1.6-.7-.645 0-1.189.222-1.634.666-.422.445-.633 1.111-.633 2 0 .912.211 1.6.633 2.067.445.467.989.7 1.634.7zm.4 12.167c1.111 0 2.022-.2 2.733-.6.711-.4 1.067-.878 1.067-1.433 0-.511-.222-.856-.667-1.034-.422-.177-1.044-.266-1.867-.266h-1.7c-.555 0-1.022-.022-1.4-.067a5.238 5.238 0 01-.933-.133c-.6.533-.9 1.078-.9 1.633 0 .623.333 1.09 1 1.4.689.334 1.578.5 2.667.5zM200.759 34.953V13.218h13.7v4.134h-8.8v5.033h7.534v4.134h-7.534v8.434h-4.9zM220.737 35.352c-1.511 0-2.711-.477-3.6-1.433-.889-.978-1.333-2.167-1.333-3.567 0-1.733.733-3.089 2.2-4.067 1.466-.977 3.833-1.633 7.1-1.966-.044-.734-.267-1.311-.667-1.734-.377-.444-1.022-.666-1.933-.666-.689 0-1.389.133-2.1.4-.711.266-1.467.633-2.267 1.1l-1.767-3.234a16.332 16.332 0 013.334-1.566c1.2-.4 2.444-.6 3.733-.6 2.111 0 3.734.61 4.867 1.833 1.134 1.222 1.7 3.1 1.7 5.633v9.468h-4l-.333-1.7h-.134a9.984 9.984 0 01-2.233 1.533c-.778.378-1.633.566-2.567.566zm1.667-3.8c.556 0 1.033-.122 1.433-.366a7.364 7.364 0 001.267-1.034v-2.9c-1.733.222-2.933.578-3.6 1.067-.667.467-1 1.022-1 1.667 0 .533.167.933.5 1.2.355.244.822.366 1.4.366zM241.349 35.352c-1.533 0-2.922-.333-4.166-1-1.223-.688-2.2-1.677-2.934-2.966-.711-1.311-1.067-2.878-1.067-4.7 0-1.845.4-3.412 1.201-4.7.8-1.29 1.855-2.267 3.166-2.934a8.969 8.969 0 014.234-1.034c1.022 0 1.922.167 2.7.5.8.334 1.511.756 2.133 1.267l-2.3 3.167c-.778-.644-1.522-.967-2.233-.967-1.178 0-2.122.423-2.834 1.267-.689.845-1.033 1.989-1.033 3.434 0 1.422.344 2.566 1.033 3.433.712.844 1.6 1.267 2.667 1.267.533 0 1.056-.111 1.567-.334a7.398 7.398 0 001.4-.866l1.933 3.2c-.822.71-1.711 1.222-2.666 1.533a9.653 9.653 0 01-2.801.434zM256.166 35.352c-1.578 0-3-.344-4.267-1.033-1.267-.689-2.267-1.678-3-2.967-.733-1.289-1.1-2.844-1.1-4.666 0-1.8.367-3.345 1.1-4.634.756-1.289 1.733-2.278 2.933-2.967 1.2-.71 2.456-1.067 3.767-1.067 1.578 0 2.878.356 3.9 1.067 1.045.69 1.823 1.634 2.334 2.834.533 1.177.8 2.522.8 4.033a11.946 11.946 0 01-.2 2.167h-9.901c.223 1.2.723 2.089 1.5 2.667.778.555 1.712.833 2.801.833 1.177 0 2.366-.367 3.566-1.1l1.634 2.967a10.802 10.802 0 01-2.834 1.367c-1.044.333-2.055.5-3.033.5zm-3.667-10.467h5.967c0-.91-.222-1.655-.667-2.233-.422-.6-1.122-.9-2.1-.9-.755 0-1.433.267-2.033.8-.6.511-.989 1.289-1.167 2.333z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgHuggingFace
