import PropTypes from 'prop-types';
function MobileMenu({ visible }) {
    if (!visible) {
        return null
    }

    return (
        <div className="colorBgAcceuil2 w-56 absolute top-14 right-4 py-5 flex-col border border-bleuClair flex">
            <div className="flex flex-col gap-4">
                <a
                    href="#quiNousSommes" 
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                    Qui sommes nous
                </a>
                <a
                    href="#services"
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                   Nos Services
                </a>
                <a
                    href="#contact"
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                    Contacts
                </a>
            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default MobileMenu;
