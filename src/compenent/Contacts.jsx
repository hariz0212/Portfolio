function Contact() {
  return (
    <section  className="py-10 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white" id="contacts">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Colonne gauche : phrase d’accroche */}
        <div className="md:w-1/2 animate-fadeInLeft">
          <p className="text-2xl font-light leading-relaxed">
            Envie de collaborer sur un projet ambitieux ?  
            <span className="block mt-2 text-blue-400 font-semibold">
              Parlons-en ensemble.
            </span>
          </p>
        </div>

        {/* Colonne droite : email stylé avec animation */}
        <div className="md:w-1/2 text-right animate-fadeInRight">
          <p className="text-lg uppercase tracking-wider text-gray-400 mb-2">
            Email
          </p>
          <p className="text-3xl font-bold relative inline-block cursor-pointer text-blue-400 animate-pulse">
            harizsan38@gmail.com
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 animate-slideUnderline"></span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;